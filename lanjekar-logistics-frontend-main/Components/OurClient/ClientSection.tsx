"use client"
import React from "react";
import ClientCard from "./ClientCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
function ClientSection() {
  const Data = [
    {
      image: "/client2.png",
      title: "Zepto",
      description: "Zepto relies on our timely and scalable logistics solutions to meet the demands of their fast-growing e-commerce platform. We help ensure rapid deliveries while maintaining the highest standards of service.",
    },
    {
        image: "/client2.png",
        title: "Delivo",
        description: " Delivo partners with Lanjekar Logistics to streamline their supply chain, benefiting from our customized transportation services and optimized delivery routes",
      },
      {
        image: "/client2.png",
        title: "Burak Electric",
        description: "Burak Electric has been a long-time partner, trusting us with their international shipping and warehouse management needs, ensuring smooth operations for their complex supply chain.",
      },
      {
          image: "/client2.png",
          title: "Burak Metering",
          description: " We provide Burak Metering with secure, on-time logistics services, helping them efficiently deliver products to their global network. ",
        },
  ];
  return (
    <section className="w-full relative h-auto  lanjekar-container">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
       
        modules={[Pagination]}
        className="mySwiper w-full relative "
      >
        {Data.map((item,index) => (
          <SwiperSlide className="w-full relative h-auto " key={index}>
            <ClientCard image={item.image} title={item.title} description={item.description} />
          </SwiperSlide>
        
        ))}
      </Swiper>
    </section>
  );
}

export default ClientSection;
