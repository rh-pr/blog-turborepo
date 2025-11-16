import { authFetchGraphQL, fetchGraphQL } from "../fetchGraphQL"
import { CREATE_POST_MUTATION, DELETE_POST_MUTATTION, GET_POST_BY_ID, GET_POSTS, GET_USER_POSTS, UPDATE_POST_MUTATION } from "../gqlQueries";
import {print} from "graphql";
import { transformationSkip } from "../helper";
import { Post } from "../types/modelTypes";
import { PostFormState } from "../types/formState";
import { PostFormShema } from "../zodSchemas/postFormSchema";
import { uploadThumbnail } from "../upload";


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

    let thumbnailUrl = "";

    if (validatedFields.data.thumbnail) {
        thumbnailUrl = await uploadThumbnail(validatedFields.data.thumbnail);
    }

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

export const updatePost = async (
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

    const { thumbnail, ...inputs } = validatedFields.data;
    let thumbnailUrl = '';

    if (thumbnail) {
        thumbnailUrl = await uploadThumbnail(thumbnail);
    }

    console.log('inputs ', inputs);
    

    const data = await authFetchGraphQL(print(UPDATE_POST_MUTATION), {
        input: {
            ...inputs,
            ...(thumbnailUrl && {thumbnail: thumbnailUrl}),
        }
    });

      console.log('data: ', data);

    if (data) return {
        messaage: "Success! New Post Saved!",
        ok: true,
    }

    return {
        messaage: "Opps, Something Went Wrong",
        data: Object.fromEntries(formData.entries()),
    }
}

export const deletePost = async (id: number) => {
    const data = await authFetchGraphQL(print(DELETE_POST_MUTATTION), { id });
    return data.deletePost;
}