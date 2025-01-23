import React from "react";
import Image from "next/image";

const retail = () => {
  return (
    <div className="h-full">
      <Image
        src={"/retail.webp"}
        width={100}
        height={100}
        alt={"retail"}
        className="h-full w-full object-cover"
      />
    </div>
  );
};

export default retail;
