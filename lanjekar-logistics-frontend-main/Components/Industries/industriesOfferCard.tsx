// import Link from "next/link";
// import React from "react";
// import { IoIosArrowRoundForward } from "react-icons/io";

// type IndustriesOfferCardProps = {
//   icon: React.ReactNode;
//   title: string;
//   url: string;
//   description: string;
// };

// const IndustriesOfferCard = ({
//   icon,
//   title,
//   url,
//   description,
// }: IndustriesOfferCardProps) => {
//   return (
//     <>
//       <div className="w-full items-center sm:items-start gap-3 p-7 group flex">
//         <div className="">{icon}</div>
//         <div className="">
//           <h2 className="text-p18 font-semibold mt-1 text-blue-900">{title}</h2>
//           <h2 className="text-p18 font-semibold md:line-clamp-3 text-center sm:text-left">
//             {description}
//           </h2>
//         </div>
//       </div>
//       <div className="p-7">
//         <Link
//           href={`industries/${url}`}
//           className="w-fit h-auto flex items-center gap-2 group-hover:gap-5 transition-all duration-500"
//         >
//           Read More
//           <IoIosArrowRoundForward className="text-[30px] text-black" />
//         </Link>
//       </div>
//     </>
//   );
// };

// export default IndustriesOfferCard;




import Link from "next/link";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

type IndustriesOfferCardProps = {
  icon: React.ReactNode; 
  title: string;        
  url: string;           
  description: string;  
};

const IndustriesOfferCard = ({
  icon,
  title,
  url,
  description,
}: IndustriesOfferCardProps) => {
  return (
    <div className="grid xl:grid-cols-[1fr_2fr] gap-5 p-7 bg-white group">
   
      <div className="h-full w-full">
        {icon}
      </div>
  
      <div className="flex-1">
    
        <h2 className="text-lg font-semibold text-blue-900 mb-2">{title}</h2>

        <p className="text-gray-700 mb-4 text-sm sm:text-base">
          {description}
        </p>
       
        <Link
          href={`industries/${url}`}
          className="w-fit h-auto flex items-center gap-2 group-hover:gap-5 transition-all duration-500"
        >
          Read More
          <IoIosArrowRoundForward className="text-xl" />
        </Link>
      </div>
    </div>
  );
};

export default IndustriesOfferCard;
