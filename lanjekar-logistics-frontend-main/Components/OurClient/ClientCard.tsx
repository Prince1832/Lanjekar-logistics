import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoIosArrowRoundForward } from "react-icons/io"

type clientcard={
    image:string,
    title:string,
    description:string
}

function ClientCard({image,title,description}:clientcard) {
  return (
    <div className='w-full relative h-auto flex flex-col items-start justify-start px-10 group transition-all duration-500 '>
        <Image src={image} alt='' height={300} width={200} className=' w-[200px] relative  '/>
        <div className='w-full relative h-auto flex flex-col gap-2 '>
            <h2 className='text-p28 font-semibold text-black'>{title}</h2>
            <p className='text-p18 font-normal text-black line-clamp-3'>{description}</p>

            <Link href={'/'} className='text-[16px] font-semibold text-black flex items-center group-hover:gap-5 transition-all duration-500 '>Read More <IoIosArrowRoundForward className='text-[28px]'/></Link>
        </div>
    </div>
  )
}

export default ClientCard