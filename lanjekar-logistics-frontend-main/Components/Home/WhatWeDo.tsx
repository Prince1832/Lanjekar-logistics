import React from "react";
import Image from "next/image";
import Link from "next/link";
function WhatWeDo() {
  return (
    <section className="w-full relative h-auto bg-white py-20 ">
      <div className="lanjekar-container w-full h-full grid  lg:grid-cols-[1.2fr_2fr] items-center justify-center gap-10 lg:gap-40 xl:gap-60 ">
        <div className="w-full h-full relative  ">
          <Image
            src={"/What-we-do.jpg"}
            alt="lanjekar - image "
            height={700}
            width={500}
            className="w-full  object-cover h-[60vh]"
          />

          <div className="text-p28 font-semibold bg-black  text-white bottom-0   lg:-right-32  px-10 py-5 md:py-6 absolute mx-w-[400px] md:w-[400px] leading-[1.3]">
            Streamlining your supply chain with reliable Services
          </div>
        </div>

        <div className="w-full relative flex items-start justify-center flex-col gap-4 md:gap-5">
          <p className="text-[16px] font-semibold text-black ">WHAT WE DO</p>
          <h2 className="text-black font-semibold text-h2 leading-[1.1]">
            High level of provisioned services
          </h2>
          <p className="text-p18 line-clamp-3 font-medium text-black ">
            At Lanjekar Logistics, we offer a high level of provisioned services
            that go beyond standard logistics solutions. Our comprehensive
            approach includes customized supply chain management, reliable
            freight handling, and advanced warehouse solutions. With a focus on
            efficiency, sustainability, and customer satisfaction, we ensure
            every project is executed with the highest standards of service.
          </p>
          <Link href={"/service"}>
            <button className="w-fit px-10 py-4 font-semibold relative border-2 border-yellow-400 bg-yellow-400 hover:bg-white hover:text-yellow-400 hover:border-2 hover:border-yellow-500 transition-all duration-500    text-p18 capitalize">
              corporate service
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
