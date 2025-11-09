import { authFetchGraphQL, fetchGraphQL } from "../fetchGraphQL";
import { CREATE_COMMENT_MUTATION, GET_POST_COMMENTS } from "../gqlQueries";
import { print } from "graphql";
import { CreateCommentFormState } from "../types/formState";
import { CommentFormSchema } from "../zodSchemas/commentFormSchema";

export async function getPostComments(
    { postId, take, skip}:
    { postId: number; take?: number; skip?: number }) {
        const data = await fetchGraphQL(print(GET_POST_COMMENTS), { postId, take, skip });
        return {
            comments: data.getPostComments,
            count: data.postCommentsCount,
        }
}

export async function saveComment(state: CreateCommentFormState, formData: FormData): Promise<CreateCommentFormState> {
    const validatedFields = CommentFormSchema.safeParse(Object.fromEntries(formData.entries()));

    if (!validatedFields.success) {
        return {
            data: Object.fromEntries(formData.entries()),
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const data = await authFetchGraphQL(print(CREATE_COMMENT_MUTATION),{
        input: {
            ...validatedFields.data,
        }
    });

    if (data) {
        return {
            message: 'Comment submitted successfully',
            ok: true,
            open: false,
        }
    }

    return {
        message: 'Falled to submit commnet',
        ok: false,
        open: true,
        data: Object.fromEntries(formData.entries()),
    }
}