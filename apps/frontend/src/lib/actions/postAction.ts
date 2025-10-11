import { fetchGraphQL } from "../fetchGraphQL"
import { GET_POSTS } from "../gqlQueries";
import {print} from "graphql";
import { transformationSkip } from "../helper";

export const fetchPosts = async ({page, pageSize}:{page: number, pageSize: number}) => {
    const { skip, take } = transformationSkip({ page, pageSize });
    const data = await fetchGraphQL(print(GET_POSTS), { skip, take });
 
    return {
        posts: data.post,
        totalPosts: data.postCount,
    };
}