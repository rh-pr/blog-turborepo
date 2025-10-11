import type { Post } from '@/lib/types/modelTypes';
import { PostCard } from './postCard';
import Pagination from './pagination';

type Props = {
    posts: Post[];
    currentPage: number;
    totalPage: number;
}

const Post = (props: Props) => {
    
    return (
        <section className='container m-8 max-w-5xl mx-auto'>
            <h2 className='text-5xl font-bold text-center text-gray-600 loading-tight'>Latest Post</h2>
            <div className='mt-5 h-1 mx-auto bg-gradient-to-r from-sky-500 to-indigo-500 w-96 mb-6 rounded-t-md '></div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-10'>
                { props.posts?.map(post => 
                    <PostCard key={post.id} {...post} />
                )}
            </div>
            <Pagination currentPage={props.currentPage} totalPages={props.totalPage} />
        </section>
    );
}

export default Post;