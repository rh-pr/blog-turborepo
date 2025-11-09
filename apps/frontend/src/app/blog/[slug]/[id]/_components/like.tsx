"use client";

import { getPostLikeData } from "@/lib/actions/likeAction";
import { HeartIcon as LikeHeart } from "@heroicons/react/16/solid";
import { HeartIcon } from "@heroicons/react/24/outline";
import { useMutation, useQuery } from "@tanstack/react-query";
import { likePost, unlikePost } from "@/lib/actions/likeAction";
import { useEffect } from "react";


type Props = {
    postId: number;
}

const Like = ({postId}: Props) => {
    const { data, refetch } = useQuery({
        queryKey: ['GET_POST_LIKE_DATA', postId],
        queryFn: async () => await getPostLikeData( postId ),
    });

    
    const likeMutation = useMutation({
        mutationFn: () => likePost(postId),
        onSuccess: () => refetch(),
    });

    const unlikeMutation = useMutation({
        mutationFn: () => unlikePost(postId),
        onSuccess: () => refetch(),
    });

   
    return (
        <div className="mt-3 flex items-center justify-start gap-2">
            {data?.userLikedPost ? 
                <button className="w-6 text-rose-600" onClick={() => unlikeMutation.mutate()}>
                    <LikeHeart />
                </button> :
                <button className="w-6" onClick={() => likeMutation.mutate()}>
                    <HeartIcon />
                </button>
            }
            <span className="text-slate-600">{data?.likeCount}</span>
        </div>
    );
}

export default Like;