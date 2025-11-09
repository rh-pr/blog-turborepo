"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getPostComments } from "@/lib/actions/commentAction";
import { DEFAULT_PAGE_SIZE } from "@/constants";
import { CommentModel } from "@/lib/types/modelTypes";
import CommentCard from "./commentCard";
import CommentPagination from "./commentPagination";
import CommentCardSkeleton from "./commentCardSkeleton";
import { SessionUser } from "@/lib/session";
import AddComment from "./addComment";

type Props = {
    postId: number;
    user?: SessionUser;
}

const Comments = ({ postId, user }: Props) => {
    const [page, setPage] = useState(1);

    const { data, isLoading, refetch } = useQuery({
        queryKey: ['GET_POST_COMMENTS', postId, page],
        queryFn: async () => await getPostComments({
            postId,
            take: DEFAULT_PAGE_SIZE,
            skip: (page - 1) * DEFAULT_PAGE_SIZE,
        }),
    });

    const totalPages = Math.ceil((data?.count ?? 0) / DEFAULT_PAGE_SIZE);
    console.log('hi', user);
    

    return (
        <div className="p-2 rounded-md shadow-md mt-8">
           <h6 className="text-lg text-slate-700 mb-4"> Comments </h6>
           {!!user && <AddComment postId={postId} user={user} className="mb-8" refetch={refetch}/>}
           <div className="flex flex-col pag-2 mt-8">
            { isLoading ? 
              Array.from({length: 12}).map((_, index) => <CommentCardSkeleton key={index}/>):
               data?.comments.map((comment: CommentModel) => <CommentCard key={comment.id} comment={comment} />)
            }
           </div>
           <CommentPagination className="p-2"
                              currentPage={page}
                              setCurrentPage={(page) => setPage(page)}
                              totalPages={totalPages} />
        </div>
    )
}

export default Comments;