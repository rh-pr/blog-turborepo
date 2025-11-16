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
    open?: boolean,
} | undefined;

export type PostFormState = {
    data?: {
        id?: number,
        title?: string,
        content?: string,
        thumbnail?: File | null,
        tags?: string,
        published?: string,
        previousThumbnailUrl?: string,
    },
    errors?: {
        title?: string[],
        content?: string[],
        thumbnail?: string[],
        tags?: string[],
        published?: string[]
    },
    messaage?: string,
    ok?: boolean,
} | undefined;