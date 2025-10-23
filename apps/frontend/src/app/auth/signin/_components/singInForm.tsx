"use client";

import { SubmitButton } from "@/components/SubmitButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signin } from "@/lib/actions/auth";
import { useActionState } from "react";

const SingInForm = () => {
    const [state, action] = useActionState(signin, undefined);

    return (
         <form action={action} className="flex flex-col gap-3">
            {!!state?.message && <p className="text-red-500 text-sm">{state.message}</p>}

            <div>
                <Label htmlFor="email" >Email</Label>
                <Input id="email" name="email" type="email" placeholder="joh.doe@gmail.com" defaultValue={state?.data?.email}/>
            </div>
            {!!state?.errors?.email && <p className="text-red-500 text-sm">{state.errors.email}</p>}

            <div>
                <Label htmlFor="password" >Password</Label>
                <Input id="password" name="password" type="password" placeholder="Joh Doe"  defaultValue={state?.data?.password}/>
            </div>
             {!!state?.errors?.password && (<div className="text-red-500 text-sm">
                <p>Password must have: </p>
                <ul>
                    {state.errors.password.map(err => <li key={err}>{err}</li>)}
                </ul>
            </div>)}
           
            <SubmitButton>Submit</SubmitButton>
        </form>
    )
}

export default SingInForm;