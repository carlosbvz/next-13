export default function Template({ children }: { children: React.ReactNode }) {
  console.log("Rendering Root Template");
  return (
    <>
      <p>Root Template</p>
      <div>{children}</div>
    </>
  );
}
