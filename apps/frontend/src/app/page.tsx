import Hero from '@/components/hero';
import Post from '@/components/post';
import { DEFAULT_PAGE_SIZE } from '@/constants';
import { fetchPosts } from '@/lib/actions/postAction';
import { getSession } from '@/lib/session';

type Props = {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function Home({searchParams}: Props) {
  const { page } = (await searchParams) ?? {};
  const {posts, totalPosts} = await fetchPosts({page: page ? +page : 1, pageSize: 12});

  const session = await getSession();
  console.log(session);

  return (
    <main className="">
      <Hero />
      <Post posts={posts} currentPage={page ? +page : 1} totalPage={Math.ceil(totalPosts / DEFAULT_PAGE_SIZE)} />
    </main>
  );
}
 