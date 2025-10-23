import {z} from "zod";
export const SignUpFormSchema = z.object({
    name: z.string().min(2).trim(),
    email: z.string()
            .trim()
            .regex( /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, { message: "Invalid email address" }),
    password: z.string()
                .min(8)
                .regex(/[a-zA-Z]/, {message: "Contain at last one letter"})
                .regex(/[0-9]/,{message: "Contain at leas one number"})
                .regex(/[^a-zA-Z0-9]/, {message: "Contain at leas one special symbol"})
                .trim(),       
});