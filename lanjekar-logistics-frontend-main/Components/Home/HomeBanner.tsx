"use client";
import React from "react";
import NavBar from "./NavBar";

export interface sidebarinterface {
  isOpenFuntion: boolean;
  setOpenFuntion: React.Dispatch<React.SetStateAction<boolean>>;
}
function HomeBanner({ isOpenFuntion, setOpenFuntion }: sidebarinterface) {
  const scrolltodown = () => {
    document.querySelector("#whoweare")?.scrollIntoView();
  };

  return (
    <>
      <section className="w-full   bg-[url('/homebanner.avif')] bg-bottom h-auto ">
        <NavBar
          isOpenFuntion={isOpenFuntion}
          setOpenFuntion={setOpenFuntion}
          normalimage="/Langekar-white-logo.webp"
          scrollimage="/Langekar-logo.webp"
        />
        <section className="w-full bg-black/30  h-[70vh] md:h-[100vh] flex flex-col items-center justify-center ">
          <div className="lanjekar-container w-full h-fit relative flex items-center justify-start">
            <div className="flex flex-col w-full md:w-[60%] gap-4  items-start relative sm:mt-0 mt-10">
              <p className="text-p18 font-semibold relative text-white uppercase ">
                National  Logistics
              </p>
              <h1 className="text-h1 font-semibold  text-white leading-[1.1]">
                Full Sustainable Solution
              </h1>
              <p className="text-p18 font-medium relative text-white">
                At Lanjekar Logistics, we provide international logistics
                solutions that are both reliable and sustainable. Our
                full-service approach ensures efficient, eco-friendly delivery
                to meet the unique needs of every client.
              </p>
              <button
                className="text-p18 font-medium px-10 py-4 text-black transition-all duration-500 border-2 border-yellow-400 bg-yellow-400  hover:bg-white hover:border-2 hover:border-yellow-400 hover:text-yellow-400 mt-5"
                onClick={scrolltodown}
              >
                WHO WE ARE
              </button>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default HomeBanner;
