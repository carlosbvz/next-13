type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <p>I am the Dashboard Layout</p>
      {children}
    </>
  );
}
