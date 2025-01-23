import React from 'react';
import Link from 'next/link';
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from 'next/image';

type Whatweoffercarddata = {
  icon: React.ReactNode;
  title: string;
  url: string;
  logo?: string; 
};

function Whatweoffercard({ title, url, logo }: Whatweoffercarddata) {
  return (
    <Link href={`service/${url}`} className='w-full relative flex flex-col gap-5 px-5 py-5 group'>
      
      {logo && (
        <Image src={`${process.env.NEXT_PUBLIC_API_URL}${logo}`} alt={title} width={200} height={200} className='w-[100px] f-[100px] mb-4' />
      )}
      <h2 className='text-p18 font-semibold text-black mt-5'>{title}</h2>
      <Link href={`service/${url}`} className='w-fit relative h-auto flex items-center gap-2 group-hover:gap-5 transition-all duration-500'>
        Read More
        <IoIosArrowRoundForward className='text-[30px] text-black' />
      </Link>
    </Link>
  );
}

export default Whatweoffercard;
