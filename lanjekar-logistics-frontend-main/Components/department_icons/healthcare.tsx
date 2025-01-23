import React from "react";
import Image from "next/image";

const healthcare = () => {
  return (
    <div className="h-full">
      <Image
        src={"/healthcare.webp"}
        width={100}
        height={100}
        alt={"healthcare"}
         className="h-full w-full object-cover"
      />
    </div>
  );
};

export default healthcare;
