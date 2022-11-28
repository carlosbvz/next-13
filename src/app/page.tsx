// app/page.js
// This file maps to the index route (/)
import { RequestInit } from "next/dist/server/web/spec-extension/request";
import PostList from "../components/blog/PostList";
import getData from "../utils/getData";

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
const POSTS_OPTIONS = {
  cache: 'no-store'
} as RequestInit;

export default async function Page() {
  const data = await getData(POSTS_URL, POSTS_OPTIONS);
  console.log("data", data);
  return (
    <>
      <h1>App Root Content</h1>
      <PostList posts={data} />
    </>
  );
}
