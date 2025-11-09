import { SubmitButton } from "@/components/SubmitButton";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { saveComment } from "@/lib/actions/commentAction";
import { SessionUser } from "@/lib/session";
import { cn } from "@/lib/utils";
import { DialogTitle } from "@radix-ui/react-dialog";
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import { useActionState, useEffect, startTransition, useState } from "react";
import { toast } from "sonner";

type Props = {
    postId: number;
    user: SessionUser;
    className?: string;
    refetch: (options?: RefetchOptions | undefined) => Promise<QueryObserverResult<{
    comments: number;
    count: number;
}, Error>>
}

const AddComment = (props: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [ state, action ] = useActionState(saveComment, undefined);
    
    useEffect(() => {
        toast( state?.ok ? 'Success' : 'Oops',{
            description: state?.message,
        });
        if(state?.ok) { 
            props.refetch();
            setIsOpen(false);
        }
        
    }, [state]);

    return (
       <Dialog open={isOpen} onOpenChange={setIsOpen}>
         <DialogTrigger asChild>
            <Button onClick={() => setIsOpen(true)}>Leave Your Comment</Button>
         </DialogTrigger>
         <DialogContent>
            <DialogTitle className="font-bold">Write Your Comment</DialogTitle>
            <form action={action} className={cn(props.className)}>
                <input type="hidden" name="postId" value={props.postId} />
                <Label htmlFor="content" className="mb-4 text-slate-600">Your Comment</Label>
                <Textarea id="content" name="content"  className="mb-2 border-none active:outline-none focus-visible:ring-0 shadow-none"/>
                {!!state?.errors?.content && <p className="text-red-500">{state.errors.content}</p>}
                <span className="text-slate-400 text-sm underline">Write as </span> 
                <span className="text-slate-700 text-sm font-bold">{props.user.name}</span>
                <div className="py-2"></div>
                <SubmitButton >Submit</SubmitButton>
            </form>
         </DialogContent>
       </Dialog>
    )
}

export default AddComment;