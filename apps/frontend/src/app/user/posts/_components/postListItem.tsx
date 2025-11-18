import { Post } from "@/lib/types/modelTypes"
import { CheckIcon } from "lucide-react"
import Image from "next/image"
import PostActions from "./postActions"

type Props = {
    post: Post,
}

const PostListItem = ({post}: Props) => {
console.log('im', post.thumbnail);

  return (
    <div className="grid grid-cols-8 m-3 rounded-md overflow-hidden border shadow hover:scale-[101%] bg-white">
        <div className="relative w-48 h-32 m-3">
            <Image src={post.thumbnail || "/default-image.jpg"} alt={post.title} fill />
        </div>
        <div className="ml-10 flex flex-col gap-2 col-span-2">
            <p className="text-lg line-clamp-1 px-2 text-slate-700 text-center"> { post.title }</p>
            <p className="text-sm line-clamp-3 px-1 text-slate-500"> { post.content } </p>
        </div>
        <div className="flex justify-center items-center">
            <p>{ new Date(post.createdAt).toLocaleDateString()}</p>
        </div>
        <div className="flex justify-center items-center">
           {post.published && <CheckIcon className="w-5" />}
        </div>
        <div className="flex justify-center items-center">
           <p>{post._count?.likes}</p>
        </div>
         <div className="flex justify-center items-center">
           <p>{post._count?.comments}</p>
        </div>
        <PostActions postId={post.id}/>
    </div>
  )
}

export default PostListItem
