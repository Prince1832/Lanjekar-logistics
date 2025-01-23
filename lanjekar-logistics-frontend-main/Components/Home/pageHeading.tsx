import React from 'react'

import { pageHeadinginterface } from '@/types/Interface'
import { RiArrowDownWideFill } from "react-icons/ri";
function PageHeading({heading}:pageHeadinginterface) {
  return (
    <section className='flex items-center justify-center md:py-20 pt-20 pb-10'>

        <h1 className='text-h2 font-semibold items-center justify-center text-black flex flex-col gap-2'>
            {heading}
            <RiArrowDownWideFill className='text-[40px] ' />

        </h1>
      
    </section>
  )
}

export default PageHeading
