// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// export interface BlogCardinterface {
//   title: string;
//   description: string;
//   createdby: string;
//   slug: string;
//   image: string;
//   readtime?: string;
// }

// function BlogCard({
//   title = "Untitled Blog",
//   description = "No description available.",
//   createdby = "Unknown Author",
//   slug,
//   image}: BlogCardinterface) {

//   // const formatDate = (date: string) => {
//   //   const options: Intl.DateTimeFormatOptions = {
//   //     day: "2-digit",
//   //     month: "2-digit",
//   //     year: "numeric",
//   //   };
//   //   const dateObj = new Date(date);
//   //   return dateObj.toLocaleDateString("en-GB", options);
//   // };

//   // const formattedDate = formatDate(time);

//   return (
//     <Link
//       href={`/blogs/${slug}`}
//       className="w-full relative h-auto grid lg:grid-cols-[1.5fr_2fr] grid-cols-1 gap-1 lg:gap-2 items-center justify-center bg-secondary"
//     >
//       <Image
//         src={`http://localhost:3001${image}`}
//         alt={title || "Blog Image"}
//         height={300}
//         width={300}
//         className="w-full object-cover lg:h-[276px] md:h-[260px] p-3"
//       />

//       <div className="w-full relative h-full flex flex-col items-start py-4 px-1 lg:pr-4 sm:px-4 lg:px-0 justify-between">
//         {/* <p className="text-[16px] font-semibold text-white bg-green-500 px-4 py-1">
//           AIR EXPRESS
//         </p> */}
//         <h2 className="text-[25px] font-semibold text-black leading-[1.2] line-clamp-3">
//           {title}
//         </h2>
//         <p className="text-p18 font-normal text-black py-1 line-clamp-4">
//           {description}
//         </p>

//         <ul className="w-full relative h-auto flex items-center gap-5 justify-between">
//           <li className="text-lg font-medium">{`Author:  ${createdby}`}</li>
//           {/* <li className="text-[16px] font-normal ">{formattedDate}</li> */}
//           <li className="text-[16px] font-normal ">{readTime}</li>
//         </ul>
//       </div>
//     </Link>
//   );
// }

// export default BlogCard;

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { BlogCardinterface } from "@/types/Interface";

// export interface BlogCardinterface {
//   title: string;
//   description: string;
//   createdby: string;
//   slug: string;
//   image: string;
//   readtime?: string;
// }

// function BlogCard({
//   title = "Untitled Blog",
//   description = "No description available.",
//   createdby = "Unknown Author",
//   slug,
//   image,
// }: BlogCardinterface) {

//   return (
//     <Link
//       href={`/blogs/${slug || ""}`}
//       className="w-full relative h-auto grid lg:grid-cols-[1.5fr_2fr] grid-cols-1 gap-1 lg:gap-2 items-center justify-center bg-secondary"
//     >
//       {image ? (
//         <Image
//           src={`http://localhost:3001${image}`}
//           alt={title}
//           height={300}
//           width={300}
//           className="w-full object-cover lg:h-[276px] md:h-[260px] p-3"
//           priority
//         />
//       ) : (
//         <div className="w-full h-[276px] bg-gray-200 flex items-center justify-center">
//           <span className="text-gray-500 text-center">Image Not Available</span>
//         </div>
//       )}

//       <div className="w-full relative h-full flex flex-col items-start py-4 px-1 lg:pr-4 sm:px-4 lg:px-0 justify-between">
//         <h2 className="text-[25px] font-semibold text-black leading-[1.2] line-clamp-3">
//           {title}
//         </h2>
//         <p className="text-p18 font-normal text-black py-1 line-clamp-4">
//           {description}
//         </p>

//         <ul className="w-full relative h-auto flex items-center gap-5 justify-between">
//           <li className="text-lg font-medium">{`Author: ${createdby}`}</li>
//           {readtime ? (
//             <li className="text-[16px] font-normal">{`Read Time: ${readtime}`}</li>
//           ) : (
//             <li className="text-[16px] font-normal text-gray-500">Read Time Not Available</li>
//           )}
//         </ul>
//       </div>
//     </Link>
//   );
// }

// export default BlogCard;





import React from "react";
import Image from "next/image";
import Link from "next/link";
import { NEXT_PUBLIC_API_URL } from "@/config";

export interface BlogCardinterface {
  title: string;
  description: string;
  createdby: string;
  slug: string;
  image: string;
  readTime?: string;
}

function BlogCard({
  title = "Untitled Blog",
  description = "No description available.",
  createdby = "Unknown Author",
  slug,
  image,
  readTime,
}: BlogCardinterface) {
  // console.log("Readtime:", readTime);
  // console.log('BlogCard props:', { title, description, readTime });


  return (
    <Link
      href={`/blogs/${slug || ""}`}
      className="w-full relative h-auto grid lg:grid-cols-[1.5fr_2fr] grid-cols-1 gap-1 lg:gap-2 items-center justify-center bg-secondary"
    >
      {image ? (
        <Image
          src={`${NEXT_PUBLIC_API_URL}${image}`}
          alt={title}
          height={300}
          width={300}
          className="w-full object-cover lg:h-[276px] md:h-[260px] p-3"
          priority
        />
      ) : (
        <div className="w-full h-[276px] bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500 text-center">Image Not Available</span>
        </div>
      )}

      <div className="w-full relative h-full flex flex-col items-start py-4 px-1 lg:pr-4 sm:px-4 lg:px-0 justify-between">
        <h2 className="text-[25px] font-semibold text-black leading-[1.2] line-clamp-3">
          {title}
        </h2>
        <p className="text-p18 font-normal text-black py-1 line-clamp-4">
          {description}
        </p>

        <ul className="w-full relative h-auto flex items-center gap-5 justify-between">
          <li className="text-lg font-medium">{`Author: ${createdby}`}</li>
          {readTime ? (
            <li className="text-[16px] font-normal">{readTime}</li>
          ) : (
            <li className="text-[16px] font-normal text-gray-500">
              Read Time Not Available
            </li>
          )}
        </ul>
      </div>
    </Link>
  );
}

export default BlogCard;
