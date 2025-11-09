"use server";
import { authFetchGraphQL } from "../fetchGraphQL";
import { LIKE_POST, POST_LIKE_DATA, UNLIKE_POST } from "../gqlQueries";
import { print } from "graphql";

export async function getPostLikeData(postId: number) {
    const data = await authFetchGraphQL(print(POST_LIKE_DATA), {
        postId,
    });
    
    return {
        likeCount: data.postLikesCount as number,
        userLikedPost: data.userLikedPost as boolean,
    }
}

export async function likePost (postId: number) {
    const data = await authFetchGraphQL(print(LIKE_POST), {
        postId,
    });
    
    
    return data;
}

export async function unlikePost (postId: number) {
    const data = await authFetchGraphQL(print(UNLIKE_POST), {
        postId,
    });

    return data;
}

