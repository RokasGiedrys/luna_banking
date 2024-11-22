import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import type { Metadata } from "next";
import MobileNav from "@/components/MobileNav";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Dashboard - Luna Bank",
  description:
    "Luna bank is the bank for people who views at this portfolio project.",
  icons: { icon: "/icons/logo.svg" },
};

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = await getLoggedInUser();
  if (!loggedIn) redirect("/sign-in");

  return (
    <main className='flex w-full h-screen font-inter'>
      <Sidebar user={loggedIn} />
      <div className='flex size-full flex-col'>
        <div className='root-layout'>
          <Image src='/icons/logo.svg' width={30} height={30} alt='logo' />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
