import {  Tooltip,  TooltipContent,  TooltipProvider, TooltipTrigger,   } from "@/components/ui/tooltip";
import { Link, PencilIcon } from "lucide-react";

type Props = {
    postId: number
}

const PostActions = ({postId}: Props) => {
  return (
    <div className="flex justify-center items-center gap-2">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <a href={`/user/posts/${postId}/update`} 
                   className="border p-2 border-yellow-500 rounded-md text-yellow-500 hover:border-yellow-700 hover:text-yellow-700 transition-colors hover:cursor-pointer">
              <PencilIcon className="w-4" />
            </a>
          </TooltipTrigger> 
          <TooltipContent className="text-yellow-500 border border-yellow-500 bg-white">
            <p>Edit this post</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

        <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <a href={`/user/posts/${postId}/delete`} 
                  className="border p-2 border-red-500 rounded-md text-red-500 hover:border-red-700 hover:text-red-700 transition-colors hover:cursor-pointer">
                    <PencilIcon className="w-4" />
            </a>
          </TooltipTrigger> 
          <TooltipContent className="text-red-500 border border-red-500 bg-white">
            <p>Delete this post</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
     
      
    </div>
  )
}

export default PostActions;
