export type SignUpFormState = {
    errors?: {
        name?: string[],
        email?: string[],
        password?: string[],
    },
    message?: string,
    data: {
        name?: string,
        email?: string,
        password?: string;
    }
} | undefined;

export type CreateCommentFormState = {
    data?: {
        content?: string,
        postId?: number,
    },
    errors?: {
        content?: string[],
    },
    message?: string,
    ok?: boolean,
    open?: boolean.
} | undefined;