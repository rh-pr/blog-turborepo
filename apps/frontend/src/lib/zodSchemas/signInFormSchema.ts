import { z } from "zod";

export const LoginFormSchema =  z.object({
    email: z.string()
            .trim()
            .regex( /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, { message: "Invalid email address" }),
    password: z.string()
                .min(3)
                .trim(),  
});
