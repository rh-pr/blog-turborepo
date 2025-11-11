"use client";

import { saveNewPost } from "@/lib/actions/postAction";
import { useActionState } from "react";
import UserPostForm from "./UserPostForm";

const CreatePostContainer = () => {
    const [state, action] = useActionState(saveNewPost, undefined);

    return <UserPostForm state={state} formAction={action} />
}

export default CreatePostContainer;
