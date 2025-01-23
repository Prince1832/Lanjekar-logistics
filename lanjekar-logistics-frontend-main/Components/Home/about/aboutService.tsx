import React, { useState, useEffect } from 'react';
import Image from 'next/image';

function AboutService() {
  const [peopleCount, setPeopleCount] = useState(0); 
  const [officesCount, setOfficesCount] = useState(0); 

  useEffect(() => {
    const animateCount = (
      start: number,
      end: number,
      setter: React.Dispatch<React.SetStateAction<number>>,
      duration: number
    ) => {
      const increment = (end - start) / (duration / 10); 
      let current = start;
      const interval = setInterval(() => {
        current += increment;
        if (current >= end) {
          clearInterval(interval);
          setter(end); 
        } else {
          setter(Math.floor(current)); 
        }
      }, 10); 
    };

  
    animateCount(0, 900, setPeopleCount, 1000);

   
    animateCount(0, 16, setOfficesCount, 1000);
  }, []); 

  return (
    <section className="w-full relative h-auto lanjekar-container grid lg:grid-cols-2 py-10 md:py-20 gap-10 lg:gap-40">
    
      <div className="flex flex-col gap-4">
        <p className="text-p18 font-semibold text-black">SERVICE FOR YOU</p>
        <h2 className="text-h2 font-semibold text-black leading-[1.1]">
          High level of provisioned services
        </h2>
        <p className="text-p18 font-medium text-black line-clamp-3">
          At Lanjekar Logistics, we deliver exceptional, high-level provisioned services to ensure the smooth operation of your supply chain. Our focus is on providing customized, end-to-end solutions that enhance efficiency, reduce operational costs, and meet the unique needs of each client. With a commitment to innovation, sustainability, and service excellence, we guarantee superior logistics support for businesses of all sizes.
        </p>
        <ul className="flex flex-col gap-3 w-full relative mt-2 lg:mt-5 list-disc pl-5">
          <li className="text-p18 font-normal">Tailored supply chain solutions for optimized operations.</li>
          <li className="text-p18 font-normal">Reliable freight management across all modes of transport.</li>
          <li className="text-p18 font-normal">Advanced warehouse management systems for inventory control.</li>
        </ul>
      </div>

   
      <div className="h-auto w-full relative">
        <Image
          src="/about-image.jpg"
          alt="About Service"
          height={400}
          width={400}
          className="w-full h-[50vh] sm:h-[70vh] lg:h-auto relative"
        />

       
        <div className="w-full h-auto flex flex-col sm:flex-row gap-4 lg:gap-10 justify-end sm:absolute -bottom-10 sm:bottom-5 lg:right-40">
        
          <div className="flex flex-col items-start w-full lg:w-[350px] justify-between p-5 bg-[#FAB700]">
            <p className="text-p18 font-semibold text-white">People</p>
            <h2 className="text-h2 font-semibold text-white">{peopleCount}+</h2>
            <p className="text-p18 font-semibold text-white">Workplaces in our company.</p>
          </div>

        
          <div className="flex flex-col items-start w-full lg:w-[350px] justify-between p-5 bg-red-600">
            <p className="text-p18 font-semibold text-white">Work Offices</p>
            <h2 className="text-h2 font-semibold text-white">{officesCount}+</h2>
            <p className="text-p18 font-semibold text-white leading-[1.2]">Work all over the world.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutService;
