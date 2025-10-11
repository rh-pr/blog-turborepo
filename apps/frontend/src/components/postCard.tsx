'use client';

import { Post } from "@/lib/types/modelTypes";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";


type Props = Partial<Post>;

export const PostCard = ({id, title, content, thumbnail, createdAt, slug}: Props) => {
  const [imgUrl, setImgUrl] = useState(thumbnail ? thumbnail : '/default-image.jpg' );

    return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
        <div className="relative h-60 ">
            <Image  src={imgUrl}
                    alt={title || 'Post image'}
                    fill
                    onError={() => setImgUrl('/default-image.jpg')}/>
        </div>
       <div className="flex flex-col flex-grow justify-around p-6">
           <h3 className="font-bold text-lg break-words mt-4 text-center text-gray-600">{title}</h3>
           <p className="mt-2 text-gray-500 text-sm">{new Date((createdAt??'')).toLocaleDateString()}</p>
           <p className="mt-4 text-gray-700 break-words">{content?.slice(0, 100)}...</p>
           <Link href={`/blog/${slug}/${id}`}
                 className="text-indigo-600 hover:underline mt-2 block mt-auto text-right">
               Read More
           </Link>
       </div>
    </div>
   
  )
}

