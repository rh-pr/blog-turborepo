import { fetchGraphQL } from "../fetchGraphQL"
import { GET_POST_BY_ID, GET_POSTS } from "../gqlQueries";
import {print} from "graphql";
import { transformationSkip } from "../helper";
import { Post } from "../types/modelTypes";


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