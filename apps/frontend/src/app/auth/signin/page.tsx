import Link from "next/link";
import SingInForm from "./_components/singInForm";


export default function SingInPage() {
  return (
    <div className="bg-white p-8 border rounded-md shadow-md w-96 flex flex-col items-center justify-center">
        <h1 className="text-center text-2xl font-bold mb-4">Sign In Page</h1>
        <SingInForm />
        <Link href={'/auth/forgot'} className="underline">Forgot Your Password</Link>
    </div>
  )
}
