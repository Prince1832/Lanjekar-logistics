import React from "react";
import Image from "next/image";
import NavBar from "@/Components/Home/NavBar";

export interface sidebarinterface {
  isOpenFuntion: boolean;
  setOpenFuntion: React.Dispatch<React.SetStateAction<boolean>>;
  bannerimage?: string;
}

function Detailbanner({
  isOpenFuntion,
  setOpenFuntion,
  bannerimage,
}: sidebarinterface) {
  console.log("Banner Image URL in Detailbanner:", bannerimage);

  return (
    <section className="w-full relative sm:h-[70vh] h-[50vh]">
      <NavBar
        isOpenFuntion={isOpenFuntion}
        setOpenFuntion={setOpenFuntion}
        normalimage="/Langekar-white-logo.webp"
        scrollimage="/Langekar-logo.webp"
      />
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      {bannerimage ? (
        <Image
          src={`${process.env.NEXT_PUBLIC_API_URL}${bannerimage}`}
          alt="Detail Banner"
          height={800}
          width={1000}
          className="w-full relative h-full object-cover z-0"
        />
      ) : (
        <p className="h-[50vh] w-[100vw] grid place-content-center text-xl">
          No banner Found...
        </p>
      )}
    </section>
  );
}

export default Detailbanner;


