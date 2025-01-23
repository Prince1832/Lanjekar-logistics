"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { FaQuoteRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";
function Peopleclientsection() {
  const peopledata = [
    {
      para: "Lanjekar Logistics has been a valuable partner in ensuring our deliveries are always on time. Their tailored logistics solutions have helped us scale rapidly while maintaining the quality our customers expect.",
      peopleImage: "/What-we-do.jpg",
      name:"John Doe",
      designation:"Head of Operations, Zepto",
    },
    {
        para: "We've been working with Lanjekar Logistics for over two years, and their attention to detail and commitment to efficiency have made them an essential part of our supply chain. Their team always goes the extra mile to ensure we meet our goals.",
        peopleImage: "/What-we-do.jpg",
        name:"Sarah Williams",
      designation:"Supply Chain Manager, Delivo",
      },
      {
        para: "Lanjekar Logistics provides excellent service across the board. Their seamless handling of our complex logistics needs has been key to maintaining the flow of our operations, both locally and internationally",
        peopleImage: "/What-we-do.jpg",
        name:"Michael Johnson",
      designation:"Logistics Director, Burak Electric",
      },
      {
        para: "Working with Lanjekar Logistics has been a great experience. Their dedication to meeting our deadlines and adapting to our specific needs makes them stand out as a logistics partner.",
        peopleImage: "/What-we-do.jpg",
        name:"Emma Clarke",
      designation:"Chief Operations Officer, Burak Metering",
      },
  ];
  return (
    <section className="w-full relative h-auto lanjekar-container py-20">
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        
        modules={[Pagination]}
        className="mySwiper"
      >
        {peopledata.map((item, index) => (

          <SwiperSlide className="w-full relaitve h-auto" key={index}>
            <div className="w-full relative h-auto flex flex-col gap-5 items-center justify-center px-10">
          
              <FaQuoteRight className="text-[30px] text-primary" />

              <div className="flex  gap-2 w-full relative items-start justify-center ">
                <Image src={item.peopleImage} alt="" height={200} width={300} className="h-[50px] w-[50px] rounded-full " />
                <span className="flex flex-col items-start  ">
                    <p className=" text-p18 font-semibold text-black">{item.name}</p>
                    <p className=" text-[16px font-normal text-black line-clamp-3">{item.designation}</p>
                </span>
              </div>
              <p className="text-p18 font-medium text-black text-center ">{item.para} </p>
            
            </div>
          </SwiperSlide>

        ))}
      </Swiper>
    </section>
  );
}

export default Peopleclientsection;
