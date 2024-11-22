"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Footer from "./Footer";

const MobileNav = ({ user }: MobileNavProps) => {
  const pathName = usePathname();

  return (
    <section className='w-full max-w-[264px]'>
      <Sheet>
        <SheetTrigger>
          <Image
            src='/icons/hamburger.svg'
            height={34}
            width={34}
            alt='menu'
            className='cursor-pointer'
          />
        </SheetTrigger>
        <SheetContent side='left' className='border-none bg-white'>
          <Link
            href='/'
            className=' cursor-pointer flex items-center gap-1 px-4'
          >
            <Image
              src='/icons/logo.svg'
              width={34}
              height={34}
              alt='Horizon logo'
            />
            <h1 className='text-26 font-ibm-plex-serif font-bold text-black-1'>
              Luna
            </h1>
          </Link>
          <div className='mobilenav-sheet'>
            <SheetClose asChild>
              <nav className='flex flex-col h-full gap-6 pt-16 text-white'>
                {sidebarLinks.map((link) => {
                  const isActive =
                    pathName === link.route ||
                    pathName.startsWith(`/${link.route}/`);

                  return (
                    <SheetClose asChild key={link.label}>
                      <Link
                        href={link.route}
                        className={cn("mobilenav-sheet_close w-full", {
                          "bg-bank-gradient": isActive,
                        })}
                      >
                        <Image
                          src={link.imgURL}
                          alt={link.label}
                          height={20}
                          width={20}
                          className={cn({
                            "brightness-[3] invert-0": isActive,
                          })}
                        />

                        <p
                          className={cn("text-16 font-semibold text-black-2", {
                            "text-white": isActive,
                          })}
                        >
                          {link.label}
                        </p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </nav>
            </SheetClose>
            <Footer user={user} type='mobile' />
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;