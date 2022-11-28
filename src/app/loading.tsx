/**
 * loading.tsx is an optional file that you can create within any 
 * directory inside the app folder. It automatically wraps the page inside 
 * of a React suspense boundary. The component will be shown immediately on the first 
 * load as well as when you’re navigating between the sibling routes.
 */

type Props = {};

export default function Loading({}: Props) {
  return <div>loading...</div>;
}
