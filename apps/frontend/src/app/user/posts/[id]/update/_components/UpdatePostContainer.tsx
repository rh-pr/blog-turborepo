"use client";

type Props = {
    post: Post,
}

import UserPostForm from "@/app/user/create-post/_components/UserPostForm";
import { updatePost } from "@/lib/actions/postAction";
import { Post } from "@/lib/types/modelTypes";
import { useActionState } from "react";

const UpdatePostContainer = ({post}: Props) => {
    const [state, action] = useActionState(updatePost, {
        data: {
            id: post.id,
            title: post.title,
            content: post.content,
            published: post.published ? "on" : undefined,
            tags: post.tags?.map((tag) => tag.name).join(','),
            previousThumbnailUrl: post.thumbnail ?? undefined,
        }
    });

    return <UserPostForm state={state} formAction={action} />
}

export default UpdatePostContainer;
