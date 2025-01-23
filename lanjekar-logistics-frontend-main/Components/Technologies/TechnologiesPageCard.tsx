import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

interface TechnologiesCardProps {
  image: string;
  name: string;
  description: string;
  slug: string;
}

const TechnologiesPageCard: React.FC<TechnologiesCardProps> = ({
  image,
  name,
  description,
  slug,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg group">
      <Image
        src={`${process.env.NEXT_PUBLIC_API_URL}/${image}`}
        alt={name}
        className="w-full h-48 object-cover"
        width={1000}
        height={800}
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
      <Link
        href={`technologies/${slug}`}
        className="w-fit p-4 h-auto flex items-center gap-2 group-hover:gap-5 transition-all duration-500"
      >
        Read More
        <IoIosArrowRoundForward className="text-[30px] text-black" />
      </Link>
    </div>
  );
};

export default TechnologiesPageCard;
