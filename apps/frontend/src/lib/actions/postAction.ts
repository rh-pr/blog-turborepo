import { authFetchGraphQL, fetchGraphQL } from "../fetchGraphQL"
import { CREATE_POST_MUTATION, GET_POST_BY_ID, GET_POSTS, GET_USER_POSTS } from "../gqlQueries";
import {print} from "graphql";
import { transformationSkip } from "../helper";
import { Post } from "../types/modelTypes";
import { PostFormState } from "../types/formState";
import { PostFormShema } from "../zodSchemas/postFormSchema";


export const fetchPosts = async ({page, pageSize}:{page: number, pageSize: number}) => {
    const { skip, take } = transformationSkip({ page, pageSize });
    const data = await fetchGraphQL(print(GET_POSTS), { skip, take });
 
    return {
        posts: data.post,
        totalPosts: data.postCount,
    };
}

export const fetchPostById = async (id: number) => {
    const data = await fetchGraphQL(print(GET_POST_BY_ID), {id});
    return data.getPostById as Post;
}

export const fetchUserPosts = async ({
    page, 
    pageSize 
}: {
    page?: number, 
    pageSize: number
}) => {
    const { skip, take } = transformationSkip({page, pageSize});

    const data = await authFetchGraphQL(print(GET_USER_POSTS), { skip, take });

    return {
        posts: data.getUserPosts as Post[],
        totalPosts: data.userPostsCount as number,
    }
}

export const saveNewPost = async (
    state: PostFormState,
    formData: FormData
): Promise<PostFormState> => {
    const validatedFields = PostFormShema.safeParse(Object.fromEntries(formData.entries()));

    if(!validatedFields.success) {
        return {
            data: Object.fromEntries(formData.entries()),
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const thumbnailUrl = "";

    const data = await authFetchGraphQL(print(CREATE_POST_MUTATION), {
        input: {
            ...validatedFields.data,
            thumbnail: thumbnailUrl,
        }
    })

    if (data) return {
        messaage: "Success! New Post Saved!",
        ok: true,
    }

    return {
        messaage: "Opps, Something Went Wrong",
        data: Object.fromEntries(formData.entries()),
    }
}