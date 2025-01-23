import Image from "next/image";
import React from "react";

const loading = () => {
  return (
    <div className="bg-white w-screen h-screen grid place-content-center">
      <Image
        className="animate-pulse"
        src={"/langekar-logo.webp"}
        alt={"langekar-logo"}
        width={300}
        height={300}
      />
    </div>
  );
};

export default loading;
