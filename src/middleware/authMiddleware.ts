import { NextResponse } from "next/server";
import type { NextRequest } from "next/server"; // นำเข้า NextRequest ที่ขาดไป

export function checkAuth(request: NextRequest) {
  const token = request.cookies.get("token"); // ตรวจสอบ token ใน cookies

  if (!token) {
    // ถ้าไม่มี token, ให้ redirect ไปหน้า login
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // ถ้ามี token ก็ให้ทำงานต่อไป
  return NextResponse.next();
}
