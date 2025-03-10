import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const token = request.cookies.get("token");

    if (!token) {
        // ถ้าไม่มี token ให้ลบ cookie ที่เกี่ยวข้องก่อนจะไปหน้า login
        const response = NextResponse.redirect(new URL("/login", request.url));
        response.cookies.set("token", "", { path: "/", expires: new Date(0) }); // เคลียร์ token
        return response;
    }

    return NextResponse.next(); // ถ้ามี token ให้ทำงานต่อไป
}

export const config = {
    matcher: ["/dashboard", "/profile", "/settings"],
};
