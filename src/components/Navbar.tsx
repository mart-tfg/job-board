import Navigation from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logoJob from "@/assets/img/logo.png";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
  return (
    <header className="sticky top-0 z-50 -mb-4 px-4 pb-4">
      <div className="fade-bottom bg-background/80 absolute left-0 h-24 w-full backdrop-blur-lg "></div>
      <div className="max-w-container relative mx-auto pl-10 pr-10">
        <NavbarComponent>
          <NavbarLeft>
            <Link
              href="/dashboard"
              className="flex items-center gap-2 text-xl font-bold"
            >
              <Image src={logoJob} alt="Logo" width={80} height={80} />
            </Link>
          </NavbarLeft>
          <NavbarRight>
            <Button
              variant="default"
              asChild
              className=" cursor-pointer bg-[#043262]"
            >
              <Link href="/login">Sign in</Link>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Saved</DropdownMenuItem>
                <DropdownMenuItem>Application History</DropdownMenuItem>

                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </NavbarRight>
        </NavbarComponent>
      </div>
    </header>
  );
}
