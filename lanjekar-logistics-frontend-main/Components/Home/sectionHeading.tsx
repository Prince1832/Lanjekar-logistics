import { sectionHeadingInterface } from '@/types/Interface'
import React from 'react'

function SectionHeading({smalltitle,title,description,css,titledescription}:sectionHeadingInterface) {
  return (
    <div className={`w-full relative items-start lanjekar-container justify-start ${css} `}>

        <div className='flex flex-col items-start gap-2 '>

            <p className='text-p18 font-semibold text-black uppercase'>{smalltitle}</p>
            <h2 className='text-h2 font-semibold leading-[1.1]'>
                {title}
            </h2>
            <p className='text-p18 font-normal text-black  '>{titledescription}</p>

        </div>
        <p className='text-p18 font-medium text-black line-clamp-4'>
            {description}
        </p>
      
    </div>
  )
}

export default SectionHeading
