import { logOutUser } from "@/lib/actions/user.actions";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Footer = ({ user, type = "desktop" }: FooterProps) => {
  const router = useRouter();

  const handleLogOut = async () => {
    const response = await logOutUser();

    if (response) router.push("/sign-in");
  };

  return (
    <footer className='footer'>
      <div className={type === "mobile" ? "footer_name-mobile" : "footer_name"}>
        <span className='text-xl font-bold text-gray-700'>
          {user?.firstName[0]}
        </span>
      </div>
      <div
        className={type === "mobile" ? "footer_email-mobile" : "footer_email"}
      >
        <span className='text-14 truncate font-semibold text-gray-700'>
          {user?.firstName}
        </span>
        <span className='text-14 truncate font-normal text-gray-600'>
          {user?.email}
        </span>
      </div>
      <div className='footer_image'>
        <Image
          src='/icons/logout.svg'
          fill
          alt='log out'
          onClick={handleLogOut}
        />
      </div>
    </footer>
  );
};

export default Footer;
