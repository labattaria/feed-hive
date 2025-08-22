"use client";

import { useOptimistic } from "react";
import { formatDate } from "@/lib/format";
import LikeButton from "./like-icon";
import { togglePostLikeStatus } from "@/actions/posts";
import Image, { ImageLoaderProps } from "next/image";
import { startTransition } from "react";
import type { PostType } from "@/types/post";

const imageLoader = ({ src, quality }: ImageLoaderProps): string => {
  const [urlStart, urlEnd] = src.split("upload/");
  const transformations = `w_200,q_${quality ?? 75}`;
  return `${urlStart}upload/${transformations}/${urlEnd}`;
};

interface PostProps {
  post: PostType;
  action: (postId: number) => Promise<void>;
}

interface PostsProps {
  posts: PostType[];
}

function Post({ post, action }: PostProps) {
  return (
    <article className="post">
      <div className="post-image">
        <Image
          loader={imageLoader}
          src={post.image}
          alt={post.title}
          width={200}
          height={120}
          quality={80}
        />
      </div>
      <div className="post-content">
        <header>
          <div>
            <h2>{post.title}</h2>
            <p>
              Shared by {post.userFirstName} on{" "}
              <time dateTime={post.createdAt.toString()}>
                {formatDate(post.createdAt)}
              </time>
            </p>
          </div>
          <div>
            <button
              type="button"
              onClick={() => action(post.id)}
              className={`like-button ${post.isLiked ? "liked" : ""}`}
            >
              <LikeButton isLiked={post.isLiked} />
            </button>
          </div>
        </header>
        <p>{post.content}</p>
      </div>
    </article>
  );
}

export default function Posts({ posts }: PostsProps) {
  const [optimisticPosts, updateOptimisticPosts] = useOptimistic<PostType[], number>(posts, (prevPosts, updatedPostId) => {
    const updatedPostIndex = prevPosts.findIndex(
      (post) => post.id === updatedPostId
    );

    if (updatedPostIndex === -1) return prevPosts;

    const updatedPost = { ...prevPosts[updatedPostIndex] };
    updatedPost.likes += updatedPost.isLiked ? -1 : 1;
    updatedPost.isLiked = !updatedPost.isLiked;

    const newPosts = [...prevPosts];
    newPosts[updatedPostIndex] = updatedPost;

    return newPosts;
  });

  if (!optimisticPosts || optimisticPosts.length === 0) {
    return <p>There are no posts yet. Maybe start sharing some?</p>;
  }

async function updatePost(postId: number): Promise<void> {
  startTransition(() => {
    updateOptimisticPosts(postId);
  });

  await togglePostLikeStatus(postId);
}

  return (
    <ul className="posts">
      {optimisticPosts.map((post) => (
        <li key={post.id}>
          <Post post={post} action={updatePost} />
        </li>
      ))}
    </ul>
  );
}
