import Posts from "@/components/posts";
import { getPosts } from "@/lib/posts";
import { Metadata } from "next";
import type { PostType } from "@/types/post";

export async function generateMetadata(): Promise<Metadata> {
  const posts: PostType[] = await getPosts();
  const numberOfPosts = posts.length;

  return {
    title: `Browse all our ${numberOfPosts} posts.`,
    description: "Browse all our posts.",
  };
}

export default async function FeedPage() {
  const posts: PostType[] = await getPosts();
  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  );
}
