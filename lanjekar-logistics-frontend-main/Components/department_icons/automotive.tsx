import React from "react";
import Image from "next/image";

const automotive = () => {
  return (
    // <div className="bg-blue-900 rounded-[50%] h-[100px] w-[100px] p-4 flex justify-center items-center">
    //   <Image
    //     src={"/automotive-icon.webp"}
    //     width={100}
    //     height={100}
    //     alt={"automotive"}
    //   />
    // </div>
    <div className="h-full">
      <Image
        src={"/automotive.webp"}
        width={100}
        height={100}
        alt={"automotive"}
        className="h-full w-full object-cover"
      />
    </div>
  );
};

export default automotive;
