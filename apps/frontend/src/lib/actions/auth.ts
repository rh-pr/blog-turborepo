"use server";

import { fetchGraphQL } from "../fetchGraphQL";
import { CREATE_USER_MUTATION } from "../gqlQueries";
import { print } from "graphql";
import { SignUpFormState } from "../types/formState";
import { SignUpFormSchema } from "../zodSchemas/signUpFormSchema";
import { redirect } from "next/navigation";

export async function signup (state: SignUpFormState, formData: FormData): Promise<SignUpFormState> {
    const validatedField = SignUpFormSchema.safeParse(Object.fromEntries(formData.entries()));
   
    if (!validatedField.success) {
        return {
            data: Object.fromEntries(formData.entries()),
            errors: validatedField.error.flatten().fieldErrors,
        }
    }

    const data = await fetchGraphQL(print(CREATE_USER_MUTATION), {
        input: {
            ...validatedField.data,
        }
    });


   if (data.errors) {
        return {
            data: Object.fromEntries(formData.entries()),
            message: "Something want wrong"
        }
   }

    redirect("/auth/signin");
}