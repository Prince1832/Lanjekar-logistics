import React from "react";
import Image from "next/image";

const TermsOfServiceBanner = () => {
  return (
    <div className="relative w-full h-[90vh]">
      <Image
        src="/terms-conditions.webp"
        width={1000}
        height={800}
        alt="terms-conditions"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40"></div>
    </div>
  );
};

export default TermsOfServiceBanner;
