import { DEFAULT_PAGE_SIZE } from "@/constants";
import { fetchUserPosts } from "@/lib/actions/postAction";
import PostsList from "./_components/postList";
import NoPost from "./_components/NoPost";

type Props = {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

const UsersPostsPage = async ({ searchParams }: Props) => {
    const { page } = (await searchParams) ?? {};
    const { posts, totalPosts } = await fetchUserPosts({page: page ? +page : 1, pageSize: DEFAULT_PAGE_SIZE});

    
    return (
        <div>
            {!posts || !posts.length ? 
                <NoPost /> : 
                <PostsList posts={posts} currentPage={page ? +page : 1} totalPages={ Math.ceil((totalPosts ?? 0) / DEFAULT_PAGE_SIZE)} />
            }
        </div>
    )
}

export default UsersPostsPage;