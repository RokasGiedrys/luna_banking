import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Authentication - Luna Bank",
  description:
    "Luna bank is the bank for people who views at this portfolio project.",
  icons: { icon: "/icons/logo.svg" },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className='flex min-h-screen w-full justify-between font-inter'>
      {children}
      <div className='auth-asset'>
        <div>
          <Image
            src='/icons/auth-image.svg'
            height={500}
            width={500}
            alt='auth asset'
          />
        </div>
      </div>
    </main>
  );
}
