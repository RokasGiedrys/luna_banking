import React, { useCallback, useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import {
  PlaidLinkOnSuccess,
  PlaidLinkOptions,
  usePlaidLink,
} from "react-plaid-link";
import {
  createLinkToken,
  exchangePublicToken,
} from "@/lib/actions/user.actions";
import Image from "next/image";

const PlaidLink = ({ user, variant }: PlaidLinkProps) => {
  const router = useRouter();
  const [token, setToken] = useState("");
  useEffect(() => {
    const getLinkToken = async () => {
      //it's illegal in react to make useEffect function async, so need to declare a new function inside.
      const data = await createLinkToken(user);
      setToken(data?.linkToken);
    };
    getLinkToken();
  }, [user]);

  const onSuccess = useCallback<PlaidLinkOnSuccess>(
    async (public_token: string) => {
      await exchangePublicToken({ publicToken: public_token, user });
      router.push("/");
    },
    [user]
  );

  const config: PlaidLinkOptions = { token, onSuccess };

  const { open, ready } = usePlaidLink(config);

  return (
    <>
      {variant === "primary" ? (
        <Button
          onClick={() => open()}
          disabled={!ready}
          className='plaidlink-primary'
        >
          Connect bank
        </Button>
      ) : variant === "ghost" ? (
        <Button
          onClick={() => open()}
          className='plaidlink-ghost'
          variant='ghost'
        >
          <Image
            src='/icons/connect-bank.svg'
            alt='connect bank'
            height={24}
            width={24}
          />
          <span className='hiddenl text-[16px] font-semibold text-black-2 xl:block'>
            Connect bank
          </span>
        </Button>
      ) : (
        <Button onClick={() => open()} className='plaidlink-default'>
          <Image
            src='/icons/connect-bank.svg'
            alt='connect bank'
            height={24}
            width={24}
          />
          <span className='text-[16px] font-semibold text-black-2'>
            Connect bank
          </span>
        </Button>
      )}
    </>
  );
};

export default PlaidLink;
