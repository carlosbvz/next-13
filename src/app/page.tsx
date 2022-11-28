// app/page.js
// This file maps to the index route (/)

import PostList from "../components/blog/PostList";
const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

/**
 * By default, fetch will automatically fetch and cache data.
 * fetch('https://...'); // cache: 'force-cache' is the default
 * 
 * To revalidate cached data at a timed interval, you can use the 
 * next.revalidate option in fetch(). The default unit is seconds.
 * fetch('https://...', { next: { revalidate: 10 } });
 * 
 * To fetch fresh data on every fetch request, use the cache: 'no-store' option.
 * fetch('https://...', { cache: 'no-store' });
 */
async function getData() {
  const res = await fetch(POSTS_URL);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  return res.json();
}

export default async function Page() {
  const data = await getData();
  console.log("data", data);
  return (
    <>
      <h1>App Root Content</h1>
      <PostList posts={data} />
    </>
  );
}
