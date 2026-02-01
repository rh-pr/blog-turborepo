"use client";

import { getLikesCount, getUseLikedStatus } from "@/lib/actions/likeAction";
import { HeartIcon as LikeHeart } from "@heroicons/react/16/solid";
import { HeartIcon } from "@heroicons/react/24/outline";
import { useMutation, useQuery } from "@tanstack/react-query";
import { likePost, unlikePost } from "@/lib/actions/likeAction";


type Props = {
    postId: number;
}

const Like = ({postId}: Props) => {

  const { data: userLiked, refetch: userLikedRefetch } = useQuery({
    queryKey: ['GET_USER_LIKED_STATUS', postId],
    queryFn: () => getUseLikedStatus(postId),
});

const { data: likesCount, refetch: likesCountRefetch } = useQuery({
    queryKey: ['GET_POST_LIKES_COUNT', postId],
    queryFn: () => getLikesCount(postId),
});

    
    const likeMutation = useMutation({
        mutationFn: () => likePost(postId),
        onSuccess: () => {
                userLikedRefetch();            
                likesCountRefetch();  
        },
    });

    const unlikeMutation = useMutation({
        mutationFn: () => unlikePost(postId),
       onSuccess: () => {
                userLikedRefetch();             
                likesCountRefetch();   
        },
    });

   
    return (
        <div className="mt-3 flex items-center justify-start gap-2">
            {userLiked ? 
                <button className="w-6 text-rose-600" onClick={() => unlikeMutation.mutate()}>
                    <LikeHeart />
                </button> :
                <button className="w-6" onClick={() => likeMutation.mutate()}>
                    <HeartIcon />
                </button>
            }
            <span className="text-slate-600">{likesCount}</span>

        </div>
    );
}

export default Like;