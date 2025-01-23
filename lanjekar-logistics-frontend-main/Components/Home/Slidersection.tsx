"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteRight } from "react-icons/fa";
import { Pagination } from "swiper/modules";

import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
function Slidersection() {
  return (
    <section className="w-full relative h-full flex flex-col md:grid md:grid-cols-2 ">
      <div className="w-full reltive h-full bg-primary flex items-center justify-center py-10 px-5 md:px-10 lg:px-20">
        <Swiper
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper w-full relative h-auto "
        >
          <SwiperSlide className="w-full relative h-full ">
            <div className="w-full relative h-auto flex flex-col gap-5 items-start justify-center px-5 md:px-2">
              <FaQuoteRight className="text-[25px] text-yellow-500" />
              <p className="text-p28 font-medium text-white/80 leading-[1.2]">
                At Lanjekar Logistics, we specialize in providing efficient and
                reliable logistics services to meet your unique business needs.
                Whether it&apos;s domestic or international shipping, our
                comprehensive supply chain solutions ensure that your goods are
                delivered safely, on time, and cost-effectively.
              </p>

              <span className="flex flex-col gap-1 w-fit relative ">
                <h2 className="text-p18 font-semibold text-white">
                  Abdus Salam
                </h2>
                <p className="text-[16px] font-normal text-white">CTO</p>
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-full relative h-full ">
            <div className="w-full relative h-auto flex flex-col gap-5 items-start justify-center px-5 md:px-2">
              <FaQuoteRight className="text-[25px] text-yellow-500" />
              <p className="text-p28 font-medium text-white/80 leading-[1.2]">
                We understand that every business is different, and that&apos;s
                why we offer customized logistics solutions designed to suit
                your requirements. From freight forwarding and warehouse
                management to last-mile delivery, our services are built around
                your specific goals.
              </p>

              <span className="flex flex-col gap-1 w-fit relative ">
                <h2 className="text-p18 font-semibold text-white">
                  Ayaan Shaikh
                </h2>
                <p className="text-[16px] font-normal text-white">
                  Senior Developer
                </p>
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-full relative h-full ">
            <div className="w-full relative h-auto flex flex-col gap-5 items-start justify-center px-5 md:px-2">
              <FaQuoteRight className="text-[25px] text-yellow-500" />
              <p className="text-p28 font-medium text-white/80 leading-[1.2]">
                With years of experience and a dedicated team of professionals,
                Lanjekar Logistics is your trusted partner in logistics. Our
                commitment to excellence, customer satisfaction, and
                sustainability sets us apart in the industry. Let us handle the
                complexities of logistics while you focus on growing your
                business.
              </p>

              <span className="flex flex-col gap-1 w-fit relative ">
                <h2 className="text-p18 font-semibold text-white">
                  Sadman Mukri
                </h2>
                <p className="text-[16px] font-normal text-white">
                  Senior Developer
                </p>
              </span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="w-full relative h-full flex items-center justify-center  ">
        <Image
          src="/image2.jpg"
          alt=""
          height={500}
          width={500}
          className="w-full relative h-full object-cover"
        />
      </div>
    </section>
  );
}

export default Slidersection;
