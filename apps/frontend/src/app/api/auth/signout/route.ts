import { deleteSessioon } from "@/lib/session";
import { redirect } from "next/navigation";

export async function GET() {
    await deleteSessioon();
    redirect("/");
}