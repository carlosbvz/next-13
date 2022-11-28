export type PostItemType = {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function PostItem(post: PostItemType) {
  return (
    <div>{post.title}</div>
  )
}