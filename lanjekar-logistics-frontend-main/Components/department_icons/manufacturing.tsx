import React from "react";
import Image from "next/image";

const manufacturing = () => {
  return (
    <div className="h-full">
      <Image
        src={"/manufacturing.webp"}
        width={100}
        height={100}
        alt={"manufacturing"}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default manufacturing;
