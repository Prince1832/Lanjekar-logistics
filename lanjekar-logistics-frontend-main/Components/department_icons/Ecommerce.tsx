import React from "react";
import Image from "next/image";

const Ecommerce = () => {
  return (
    <div className="h-full">
      <Image
        src={"/e-commerce.webp"}
        width={100}
        height={100}
        alt={"ecommerce"}
        className="h-full w-full object-cover"
      />
    </div>
  );
};

export default Ecommerce;
