import { fetchPostById } from "@/lib/actions/postAction";
import Image from "next/image"
import SantizedContent from "./_components/SantizedContent";
import Comments from "./_components/comments";
import { getSession } from "@/lib/session";
import Like from "./_components/like";

type Props = {
    params: {
        id: string
    }
}

export default async function PostPage ({ params }:Props) {
    const postId = (await params).id;
    const post = await fetchPostById(+postId);
    const session = await getSession();

    return <main className="container mx-auto px-4 py-8 mt-16  ">
        <h1 className="text-4xl font-bold mb-4 text-slate-700 text-center">{post.title}</h1>
        <p className="text-slate-500 text-sm mb-4 text-center">
            By {post.author.name} {new Date(post.createdAt).toLocaleDateString()}
        </p>
        <div className="relative  h-60 flex justify-center w-full">
            <Image src={post.thumbnail ?? "/default-image.jpn"}
                   alt={post.title}
                   fill
                   className="rounded-md object-cover"/>
        </div>
        <SantizedContent content={post.content}   className="mt-4 "/>
        <Like postId={post.id} />
        <Comments postId={post.id} user={session?.user}/>
    </main>
}