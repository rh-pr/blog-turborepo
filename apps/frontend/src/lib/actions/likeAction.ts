"use server";
import { authFetchGraphQL, fetchGraphQL } from "../fetchGraphQL";
import { LIKE_POST, POST_LIKES_COUNT, UNLIKE_POST, USER_LIKED_POST } from "../gqlQueries";
import { print } from "graphql";


export async function getUseLikedStatus(postId: number) {
    const userLiked = await authFetchGraphQL(print(USER_LIKED_POST),{ postId })
    return userLiked.userLikedPost;
}

export async function getLikesCount(postId: number) {
    const likesCount = await fetchGraphQL(print(POST_LIKES_COUNT), { postId });
    return likesCount.postLikesCount as number
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

