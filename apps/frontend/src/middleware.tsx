import { NextRequest, NextResponse } from "next/server";
import { getSession } from "./lib/session";

export async function middleware(reqest: NextRequest) {
    const session = await getSession();
    if (!session || !session.user) {
        return NextResponse.redirect(new URL('/auth/signin', reqest.url));
    }
}

export const config = {
    matcher: '/user/:path*'
}