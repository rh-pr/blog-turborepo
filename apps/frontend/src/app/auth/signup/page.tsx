import Link from "next/link";
import SignUpForm from "./_components/signUpForm";

export default function SignUpPage() {
  return (
    <div className="bg-white p-8 rounded-md shadow-md w-96 flex flex-col gap-6 items-center judtify-center">
      <h2 className="text-center text-2xl font-bold mb-4"> Sign Up </h2>
      <SignUpForm />
      <div>
        <p>Areadyy have an acount?</p>
        <Link href={"/auth/signin"} className="underline"> Sign In</Link>
      </div>
    </div>
  )
}
