export type SignUpFormState = {
    errors?: {
        name?: string[],
        email?: string[],
        password?: string[],
    },
    message?: string,
    data?: {
        name?: string,
        email?: string,
        password?: string;
    }
} | undefined;