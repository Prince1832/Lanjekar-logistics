import Image from 'next/image'
import React from 'react'

const technologyBanner = () => {
  return (
<div className="relative w-full h-[30vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh]">
          <Image
            src="/technology-banner.webp"
            alt="Technology Banner"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-white text-h1 md:text-6xl font-bold space-x-3">
              Our technologies
            </h1>
          </div>
        </div>
  )
}

export default technologyBanner