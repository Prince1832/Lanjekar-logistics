import React from "react";
import Image from "next/image";
const IndustriesBanner = () => {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-black/40"></div>
      <Image
        className="w-full h-[40vh] object-fill sm:h-[60vh] md:h-[60vh]"
        src={"/industries-banner.webp"}
        width={1000}
        height={800}
        alt={"industry-main"}
      />
      <div></div>
    </section>
  );
};

export default IndustriesBanner;
