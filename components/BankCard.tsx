import { formatAmount } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import Copy from "./Copy";

const BankCard = ({
  account,
  userName,
  showBalance = true,
}: CreditCardProps) => {
  console.log(account);
  return (
    <div className='flex flex-col'>
      <Link
        href={`/transaction-history/?id=${account.appwriteItemId}`}
        className='bank-card'
      >
        <div className='bank-card_content'>
          <div>
            <h3 className='text-16 font-semibold text-white'>{account.name}</h3>
            <p className='font-ibm-plex-serif font-black text-white'>
              {formatAmount(account.currentBalance)}
            </p>
          </div>

          <div className='flex flex-col gap-2'>
            <div className='flex justify-between'>
              <h3 className='text-12 font-semibold text-white'>{userName}</h3>
              <h3 className='text-12 font-semibold text-white'>●● / ●●</h3>
            </div>
            <p className='text-14 font-semibold tracking-[1.1px] text-white'>
              ●●●● ●●●● ●●●● <span className='text-16'>{account?.mask}</span>
            </p>
          </div>
        </div>

        <div className='bank-card_icon'>
          <Image src='/icons/Paypass.svg' width={20} height={24} alt='pay' />
          <Image
            src='/icons/mastercard.svg'
            width={45}
            height={32}
            alt='mastercard'
            className='ml-5'
          />
        </div>

        <Image
          src='/icons/lines.png'
          width={316}
          height={190}
          alt='lines'
          className='absolute top-0 left-0'
        />
      </Link>

      {showBalance && <Copy title={account?.sharaebleId} />}
    </div>
  );
};

export default BankCard;
