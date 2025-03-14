import Image from "next/image";
import logoJob from "@/assets/img/logo.png";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { Menu } from "lucide-react"; // Use Menu icon as a hamburger menu
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

export default function Navbar() {
  const { token, logout } = useAuth();
  const { Button, Avatar, AvatarImage, AvatarFallback } = useGlobalComponent();

  return (
    <header className="sticky top-0 z-50 -mb-4 px-4 pb-4">
      <div className="fade-bottom bg-background/80 absolute left-0 h-24 w-full backdrop-blur-lg "></div>
      <div className="max-w-container relative mx-auto pl-15 pr-15">
        <NavbarComponent>
          <NavbarLeft>
            <Link
              href="/board"
              className="flex items-center gap-2 text-xl font-bold"
            >
              <Image src={logoJob} alt="Logo" width={80} height={80} />
            </Link>
            {/* เมนูแสดงปกติบน Desktop */}
            <div className="hidden sm:flex gap-10 font-medium">
              <Link href={"/board"}>ค้นหางาน</Link>
              <Link href={"/"}>โปรไฟล์</Link>
              <Link href={"/"}>ครบเครื่องเรื่องงาน</Link>
              <Link href={"/"}>บริษัททั้งหมด</Link>
            </div>
          </NavbarLeft>

          <NavbarRight>
            {/* ซ่อนปุ่ม sign in บน Desktop */}
            {!token ? (
              <Button
                variant="default"
                asChild
                className="cursor-pointer bg-[#043262]"
              >
                <Link href="/login" aria-label="Sign in to your account">
                  Sign in
                </Link>
              </Button>
            ) : (
              // แสดง DropdownMenu บน Desktop
              <DropdownMenu aria-label="User account menu">
                <DropdownMenuTrigger>
                  <div className="cursor-pointer">
                    <Avatar className="w-[50px] h-[50px]">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="User Avatar"
                      />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Saved</DropdownMenuItem>
                  <DropdownMenuItem>Application History</DropdownMenuItem>
                  <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}

            {/* แสดงเมนูสำหรับมือถือ */}
            <div className="sm:hidden">
              {/* เงื่อนไขเช็คว่าไม่มี token (ไม่ได้ล็อกอิน) */}
              {token && (
                <DropdownMenu aria-label="Mobile menu">
                  <DropdownMenuTrigger asChild>
                    <button aria-label="Open menu">
                      <Menu className="w-[50px] h-[50px] mt-2" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <Link href={"/board"}>ค้นหางาน</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href={"/"}>โปรไฟล์</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href={"/"}>ครบเครื่องเรื่องงาน</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href={"/"}>บริษัททั้งหมด</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </div>
          </NavbarRight>
        </NavbarComponent>
      </div>
    </header>
  );
}
