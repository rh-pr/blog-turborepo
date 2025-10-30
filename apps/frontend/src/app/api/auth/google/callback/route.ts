import { createSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET(req: NextResponse) {
    const { searchParams } = new URL(req.url);
    const accessToken = searchParams.get('accessToken');
    const userId = searchParams.get('userId');
    const name = searchParams.get('name');
    const avatar = searchParams.get('avatar');

    if(!accessToken || !name || !userId) throw new Error ('Google Oauth failed!');

    const res = await fetch(`${process.env.BACKEND_URL}/auth/verify-token`, {
        headers: {
            authorization: `Bearer ${accessToken}`
        }
    });

    if (res.status == 401) throw new Error('JWT verification failed!');

    await createSession({
        user: {
            id: userId,
            name,
            avatar: avatar ? avatar : undefined,
        },
        accessToken
    });

    redirect("/");
}