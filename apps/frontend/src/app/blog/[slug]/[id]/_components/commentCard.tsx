import { CommentModel } from "@/lib/types/modelTypes";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { UserIcon } from "lucide-react";

type Props = {
    comment: CommentModel
}
const CommentCard = ({comment}: Props) => {
    return (
        <div className="p-2 shadow-md rounded">
           <div className="flex gap-2 text-slate-500 items-center">
            <Avatar className="border-2">
                <AvatarImage
                    className="w-8 h-8 rounded-full"
                    src={comment.author.avatar} alt={comment.author.name} />
                <AvatarFallback >
                    <UserIcon className="w-8 h-9" />
                </AvatarFallback>
            </Avatar>
            <p>{comment.author.name}</p>
            <p>{new Date(comment.createdAt).toLocaleDateString()}</p>
           </div>
           <p className="mt-4">
            {comment.content}
           </p>
        </div>
    )
}

export default CommentCard;
