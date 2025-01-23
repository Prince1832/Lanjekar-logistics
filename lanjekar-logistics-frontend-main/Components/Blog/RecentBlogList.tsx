import React from "react";

type InterfaceOfRecent = {
  image: string;
  title: string;
  createdby: string;
  time: string;
};

// const formatDate = (date: string) => {
//   const options: Intl.DateTimeFormatOptions = {
//     day: "2-digit",
//     month: "2-digit",
//     year: "numeric",
//   };

//   const dateobj = new Date(date);
//   if (isNaN(dateobj.getTime())) {
//     return "Invalid Date";
//   }

//   return dateobj.toLocaleDateString("en-GB", options);
// };

function RecentBlogList({ title, createdby }: InterfaceOfRecent) {
  // const formattedDate = formatDate(time);
  return (
    <section className="w-full relative hidden md:flex flex-col items-start gap-4">
      <div className="flex items-start gap-3 w-full relative">
        <span className="flex flex-col gap-1">
          <span className="w-full text-[15px] relative flex items-center gap-1">
            {createdby}
          </span>
          <p className="text-[17px] font-semibold text-black line-clamp-2">
            {title}
          </p>
          {/* <p className="text-[16px] font-normal">{formattedDate}</p> */}
        </span>
      </div>
    </section>
  );
}

export default RecentBlogList;
