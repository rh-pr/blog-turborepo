export type Post = {
  id: number;
  title: string;
  slug?: string;
  content: string;
  thumbnail: string | null;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
  authorId: number;
  author: User;
  tags: Tag[];
  _count?: {
    likes: number,
    comments: number,
  }
}

export type User = {
  name: string;
  id: number;
  email: string;
  bio: string | null;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type Tag = {
    id: string;
    name: string;
}

export type CommentModel = {
    id: number;
    content: string;
    post: Post;
    author: User;
    createdAt: Date;
    updatedAt: Date;
}