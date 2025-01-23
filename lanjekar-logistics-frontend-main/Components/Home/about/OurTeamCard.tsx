import React from "react";
import Image from "next/image";
import { OurTeamCardinterface } from "@/types/Interface";

function OurTeamCard({ image, name, detail, bio }: OurTeamCardinterface) {
  return (
    <div className="w-full relative flex flex-col h-auto gap-4 mx-auto max-w-[450px] lg:w-full">
      <div className="w-full relative h-auto group overflow-hidden cursor-pointer">
        <Image
          src={`${process.env.NEXT_PUBLIC_API_URL}${image}`}
          alt={name}
          height={200}
          width={200}
          className="w-full relative h-[350px] hover:scale-[1.02] transition-all duration-500"
        />
      </div>
      <span className="flex flex-col w-full relative">
        <h2 className="text-p28 font-semibold text-black">{name}</h2>
        <p className="font-normal text-[17px] text-black">{detail}</p>
        {bio && <p className="font-light text-[14px] text-gray-600">{bio}</p>}
      </span>
    </div>
  );
}

export default OurTeamCard;
