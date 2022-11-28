import { RequestInit } from "next/dist/server/web/spec-extension/request";
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

 export default async function getData(
  url: string,
  options?: RequestInit
  ) {
  const res = await fetch(url, options);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  return res.json();
}