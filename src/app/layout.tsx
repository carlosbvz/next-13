/**
 *
 * The app directory must include a root layout.
 * The root layout must define <html>, and <body> tags since Next.js does not automatically create them.
 * You can use the head.js special file to manage <head> HTML elements that change between route segments. For example, the <title> element.
 * You can use route groups to create multiple root layouts. See an example here.
 * The root layout is a Server Component by default and can not be set to a Client Component.
 */

import Navigation from "../components/global/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log("Rendering Root Layout");
  return (
    <html lang="en">
      <body>
        <p>Root Layout</p>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
