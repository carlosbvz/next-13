// 'use client'

import PostItem, {PostItemType} from "./PostItem"

type Props = {
  posts: PostItemType[];
}

export default function PostList({posts}: Props) {
  console.log(posts)
  return (
    <>
    {posts?.map( post => <PostItem key={post?.id} {...post} /> )}
    </>
  )
}