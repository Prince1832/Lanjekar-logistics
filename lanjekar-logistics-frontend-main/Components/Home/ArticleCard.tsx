import React from "react";
import Image from "next/image";
import { ArticleCardinterface } from "@/types/Interface";

function ArticleCard({
  title,
  description,
  banner,
  createdby,
  createAt,
  slug,
  id,
  showpara,
  acticlefor,
}: ArticleCardinterface) {
  return (
    <div className="h-auto mx-auto max-w-[500px] md:w-full relaitve  ">
      <Image
        src={`${process.env.NEXT_PUBLIC_API_URL}${banner}`}
        alt="article image"
        height={300}
        width={300}
        className=" h-[200px] sm:h-[250px] w-full relative object-cover"
      />
      <div className="w-full relative h-auto flex flex-col gap-3 py-5 ">
        <span className=" flex gap-5 items-center w-full justify-between">
          <p className="text-black text-p18 font-medium ">{createdby}</p>
          <p className="text-[16px] font-normal text-black">
            {createAt?.slice(0, 10)}
          </p>
        </span>
        <h2 className="text-h4 font-medium line-clamp-2 text-black leading-[1.2]">
          {title}
        </h2>
      </div>
    </div>
  );
}

export default ArticleCard;
