"use server";

import { uploadImage } from "@/lib/cloudinary";
import { storePost, updatePostLikeStatus } from "@/lib/posts";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import type { NewPost } from "@/types/post";

interface CreatePostResult {
  errors: string[];
}

export async function createPost(formData: FormData): Promise<CreatePostResult | void> {
  const titleRaw = formData.get("title");
  const imageRaw = formData.get("image");
  const contentRaw = formData.get("content");

  const errors: string[] = [];

  if (!titleRaw || (titleRaw as string).trim().length === 0) {
    errors.push("Title is required.");
  }

  if (!contentRaw || (contentRaw as string).trim().length === 0) {
    errors.push("Content is required.");
  }

  if (!imageRaw || !(imageRaw instanceof File) || imageRaw.size === 0) {
    errors.push("Image is required.");
  }

  if (errors.length > 0) {
    return { errors };
  }

  const title = titleRaw as string;
  const content = contentRaw as string;
  const image = imageRaw as File;

  let imageUrl: string;

  try {
    imageUrl = await uploadImage(image);
  } catch (error) {
    throw new Error(
      "Image upload failed, post was not created. Please try again later."
    );
  }

  const newPost: NewPost = {
    title,
    content,
    imageUrl,
    userId: 1,
  };

  await storePost(newPost);

  revalidatePath("/", "layout");
  redirect("/feed");
}

export async function togglePostLikeStatus(postId: number): Promise<void> {
  updatePostLikeStatus(postId, 2);
  revalidatePath("/", "layout");
}
