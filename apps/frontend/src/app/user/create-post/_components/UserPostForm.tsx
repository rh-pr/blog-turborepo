"use client";

import { SubmitButton } from "@/components/SubmitButton";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { PostFormState } from "@/lib/types/formState";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "sonner";

type Props = {
    state: PostFormState,
    formAction: (payload: FormData) => void,
}


const UserPostForm = ( {state, formAction}: Props) => {
    const [imageUrl, setImageUrl] = useState<string>('');

    useEffect(() => {
        if (state?.messaage) {
             toast( state?.ok ? 'Success' : 'Oops',{
            description: state?.messaage,
        });
        }
    }, [state])
  return (
    <form action={formAction} className="flex flex-col gap-5 [&>div>label]:text-slate-500 [&>div>input]:transition [&>div>textarea]:transition ">
        <div>
            <Label htmlFor="title">Title</Label>
            <Input name="title" placeholder="Enter Title Of Your Post" />
        </div>
        {state?.errors?.title && (
            <p className="text-red-500">{state.errors.title}</p>
        )}
        <div>
            <Label htmlFor="content">Content</Label>
            <Textarea
                name="content"
                placeholder="Write Your Post Content Here"
                rows={6} />
        </div>
         {state?.errors?.content && (
            <p className="text-red-500">{state.errors.content}</p>
        )}
        <div>
            <Label htmlFor="thumbnail">Image</Label>
            <Input 
                type="file"
                name="thumbnail" 
                accept="image/*" 
                onChange={(e) => {
                    if (e.target.files) 
                        setImageUrl(URL.createObjectURL(e.target.files[0]));
                }}/>

                {!!imageUrl && (
                    <Image
                        src={imageUrl}
                        alt="post thumbnail"
                        width={200}
                        height={200} />
                )}
        </div>
         {state?.errors?.thumbnail && (
            <p className="text-red-500">{state.errors.thumbnail}</p>
        )}
        <div>
            <Label htmlFor="tags" >Tags</Label>
            <Input name="tags" placeholder="Enter tags (comma-separated" />
        </div>
         {state?.errors?.tags && (
            <p className="text-red-500">{state.errors.tags}</p>
        )}
        <div className="flex gap-2">
            <Checkbox name="published" />
            <Label htmlFor="published">Published Now</Label>
        </div>
         {state?.errors?.published && (
            <p className="text-red-500">{state.errors.published}</p>
        )}

        <SubmitButton>Save</SubmitButton>
        
    </form>
  )
}

export default UserPostForm
