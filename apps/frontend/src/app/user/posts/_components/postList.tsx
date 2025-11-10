import { Post } from "@/lib/types/modelTypes"
import PostListItem from "./postListItem";
import Pagination from "@/components/pagination";

type Props = {
    posts: Post[],
    currentPage: number,
    totalPages: number,
}

const PostsList = ({posts, currentPage, totalPages}: Props) => {
    console.log('totoal',totalPages)
    return (
        <>
        <div className="grid grid-cols-8 rounded-md shadow-md m-3 p-3 text-center">
            <div className="col-span-2"></div>
            <div></div>
            <div>Date</div>
            <div>Published</div>
            <div>Likes</div>
            <div>Comments</div>
            <div></div>
        </div>
         {posts.map((post: Post) => <PostListItem key={post.id} post={post} />)}
         <Pagination {...{currentPage, totalPages}} className="my-4"/>
        </>
    )
}

export default PostsList;