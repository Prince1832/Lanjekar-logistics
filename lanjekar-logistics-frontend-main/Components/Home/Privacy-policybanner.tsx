import React from "react";
import Image from "next/image";

const PrivacyPolicyBanner = () => {
  return (
    <div className="relative w-full h-[90vh]">
      <Image
        src={"/privacy-policy.webp"}
        width={1000}
        height={800}
        alt="privacy-policy"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40"></div>
    </div>
  );
};

export default PrivacyPolicyBanner;
