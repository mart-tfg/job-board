import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { Menu, X } from "lucide-react"; // ใช้ X สำหรับปิดเมนู
import { useGlobalComponent } from "@/providers/GlobalComponents";

import {
  Navbar as NavbarComponent,
  NavbarLeft,
  NavbarRight,
} from "@/components/ui/navbar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import logoJob from "@/assets/img/logo.png"; // นำเข้าโลโก้

export default function Navbar() {
  const { token, logout } = useAuth();
  const { Button, Avatar, AvatarImage, AvatarFallback } = useGlobalComponent();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // สร้าง state ควบคุมเมนูมือถือ

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-[1280px] mx-auto px-6">
        <NavbarComponent className="flex items-center justify-between py-4">
          {/* Left Side */}
          <NavbarLeft className="flex items-center gap-6">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image src={logoJob} alt="Logo" width={60} height={60} />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-6 font-medium">
              <Link href="/board" className="hover:text-blue-600">ค้นหางาน</Link>
              <Link href="/profile" className="hover:text-blue-600">โปรไฟล์</Link>
              <Link href="/" className="hover:text-blue-600">ครบเครื่องเรื่องงาน</Link>
              <Link href="/" className="hover:text-blue-600">บริษัททั้งหมด</Link>
            </nav>
          </NavbarLeft>

          {/* Right Side */}
          <NavbarRight className="flex items-center gap-4">
            {/* Desktop: Show Sign In or Avatar */}
            {!token ? (
              <Button variant="default" asChild className="hidden md:flex bg-[#043262]">
                <Link href="/login">Sign in</Link>
              </Button>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar className="w-10 h-10 cursor-pointer">
                    <AvatarImage src="https://github.com/shadcn.png" alt="User Avatar" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48">
                  <DropdownMenuLabel>บัญชีของฉัน</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem><Link href="/profile">โปรไฟล์</Link></DropdownMenuItem>
                  <DropdownMenuItem><Link href="/saved">งานที่บันทึก</Link></DropdownMenuItem>
                  <DropdownMenuItem><Link href="/history">ประวัติการสมัคร</Link></DropdownMenuItem>
                  <DropdownMenuItem onClick={logout} className="text-red-600">ออกจากระบบ</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </NavbarRight>
        </NavbarComponent>

        {/* Mobile Menu (แสดงเมื่อกดปุ่ม) */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg rounded-2xl">
            <nav className="flex flex-col items-center gap-4 py-6">
              <Link href="/board" className="hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>ค้นหางาน</Link>
              <Link href="/profile" className="hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>โปรไฟล์</Link>
              <Link href="/" className="hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>ครบเครื่องเรื่องงาน</Link>
              <Link href="/" className="hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>บริษัททั้งหมด</Link>
              {!token ? (
                <Button asChild className="bg-[#043262] w-40" onClick={() => setMobileMenuOpen(false)}>
                  <Link href="/login">Sign in</Link>
                </Button>
              ) : (
                <button className="text-red-600" onClick={logout}>ออกจากระบบ</button>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
