import { NextRequest, NextResponse } from "next/server";

export function middleware(reqest: NextRequest) {
    return NextResponse.redirect(new URL('/auth/login', reqest.url));
}

export const config = {
    matcher: '/user/:path*'
}