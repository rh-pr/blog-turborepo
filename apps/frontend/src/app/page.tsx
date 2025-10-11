import Hero from '@/components/hero';
import Post from '@/components/post';
import { fetchPosts } from '@/lib/actions/postAction';

type Props = {
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default async function Home(props: Props) {
  const posts = await fetchPosts();

  return (
    <main className="">
      <Hero />
      <Post posts={posts} />
    </main>
  );
}
