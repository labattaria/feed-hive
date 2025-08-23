export type PostType = {
  id: number;
  image: string;
  title: string;
  content: string;
  createdAt: string | Date;
  userFirstName: string;
  userLastName: string;
  likes: number;
  isLiked: boolean;
};

export type PostFromDb = {
  id: number;
  imageUrl: string;
  title: string;
  content: string;
  createdAt: Date;
  user: {
    firstName: string;
    lastName: string;
  };
  likes: { userId: number }[];
};

export type NewPost = {
  imageUrl: string;
  title: string;
  content: string;
  userId: number;
};