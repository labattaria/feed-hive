import prisma from "./prisma.js";

export async function getPosts(maxNumber) {
  const posts = await prisma.post.findMany({
    take: maxNumber || undefined,
    orderBy: { createdAt: "desc" },
    include: {
      user: true,
      likes: true,
    },
  });

  return posts.map((post) => ({
    id: post.id,
    image: post.imageUrl,
    title: post.title,
    content: post.content,
    createdAt: post.createdAt,
    userFirstName: post.user.firstName,
    userLastName: post.user.lastName,
    likes: post.likes.length,
    isLiked: post.likes.some((like) => like.userId === 2),
  }));
}

export async function storePost(post) {
  return prisma.post.create({
    data: {
      imageUrl: post.imageUrl,
      title: post.title,
      content: post.content,
      userId: post.userId,
    },
  });
}

export async function updatePostLikeStatus(postId, userId) {
  const existingLike = await prisma.like.findUnique({
    where: {
      userId_postId: {
        userId,
        postId,
      },
    },
  });

  if (!existingLike) {
    return prisma.like.create({
      data: {
        userId,
        postId,
      },
    });
  } else {
    return prisma.like.delete({
      where: {
        userId_postId: {
          userId,
          postId,
        },
      },
    });
  }
}
