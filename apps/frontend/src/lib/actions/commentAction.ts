import { fetchGraphQL } from "../fetchGraphQL";
import { GET_POST_COMMENTS } from "../gqlQueries";
import { print } from "graphql";

export async function getPostComments(
    { postId, take, skip}:
    { postId: number; take?: number; skip?: number }) {
        const data = await fetchGraphQL(print(GET_POST_COMMENTS), { postId, take, skip });
        return {
            comments: data.getPostComments,
            count: data.postCommentsCount,
        }
}