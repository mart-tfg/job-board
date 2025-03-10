import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value; // ดึงค่าจริงของ token

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

// ✅ ใช้ wildcard `:path*` เพื่อให้ Middleware ทำงานกับทุก path ที่อยู่ภายใต้เส้นทางนั้น
export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*", "/settings/:path*"],
};
