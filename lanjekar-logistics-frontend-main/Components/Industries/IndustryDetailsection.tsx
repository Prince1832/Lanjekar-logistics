import React from "react";
import Image from "next/image";


function IndustryDetailsection({ industryData}: any ) {
  if (!industryData) {
    return (
      <p className="grid place-content-center text-xl">
        Loading...
      </p>
    );
  }


  const { name, description, imageAlt } = industryData;

  return (
    <section className="w-full relative h-auto flex flex-col gap-5">
      <Image
      
        src={`${process.env.NEXT_PUBLIC_API_URL}${industryData.image}`}
        alt={imageAlt || "truck-transportation"}
        height={400}
        width={400}
        className="w-full h-[400px] relative object-cover"
      />
      <h2 className="text-p18 font-semibold text-black">{name}</h2>
      <p className="text-p18 font-normal">{description}</p>
    </section>
  );
}

export default IndustryDetailsection;
