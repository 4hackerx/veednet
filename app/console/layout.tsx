export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-full flex-col items-center gap-8 pt-8 h-screen ">
      <img src="/logo-vertical.svg" alt="logo" />
      {children}
    </div>
  );
}
