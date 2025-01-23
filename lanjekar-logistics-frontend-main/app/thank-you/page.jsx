"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavBar from "@/Components/Home/NavBar";
import Footer from "@/Components/Home/Footer";

const Page = () => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <>
      <NavBar
        isOpenFuntion={isOpen}
        setOpenFuntion={setisOpen}
        css="black"
        normalimage="/Langekar-logo.webp"
        scrollimage="/Langekar-logo.webp"
      />

      <section className="bg-gray-300 flex flex-col justify-center items-center w-full h-[900px]">
        <Image className="" src="/checked.svg" alt="checked" width={75} height={75} loading="lazy" />
        <div className="w-full max-w-[900px] rounded-md flex gap-2 justify-center items-center flex-col mt-10 sm:p-0 p-5">
          <h1 className="text-bold lg:text-7xl md:text-4xl text-3xl">Thank You!</h1>
          <p className="font-medium text-lg text-center sm:text-start">Our experts will reach you out soon</p>
          <p className="mt-4 font-medium text-lg text-center sm:text-start">More information on our website and social pages</p>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-5">
            <div className="sm:w-[200px] w-full h-full sm:h-[220px] bg-white rounded-lg p-5 flex flex-col justify-center items-center">
              <h2 className="capitalize font-bold">Connect with us</h2>
              <div className="flex gap-4 text-center mt-5 items-center">
                <Link href="https://www.facebook.com/lanjekarlogistics/" aria-label="Facebook">
                  <div className="group cursor-pointer">
                    <Image
                      className="group-hover:filter group-hover:brightness-0 transition duration-300"
                      src="/facebook.svg"
                      alt="facebook"
                      width={30}
                      height={30}
                    />
                  </div>
                </Link>
                <Link href="https://www.instagram.com/lanjekarlogistics/" aria-label="Instagram">
                  <div className="group cursor-pointer">
                    <Image
                      className="group-hover:filter group-hover:brightness-0 transition duration-300"
                      src="/instagram.svg"
                      alt="instagram"
                      width={31}
                      height={31}
                    />
                  </div>
                </Link>
                <Link href="https://lanjekar.com/" aria-label="Twitter">
                  <div className="group cursor-pointer">
                    <Image
                      className="group-hover:filter group-hover:brightness-0 transition duration-300"
                      src="/twitter.svg"
                      alt="twitter"
                      width={24}
                      height={24}
                    />
                  </div>
                </Link>
              </div>
            </div>

            <div className="sm:w-[200px] w-full h-full sm:h-[220px] bg-white rounded-lg p-5 flex flex-col justify-center items-center">
              <h2 className="capitalize font-bold">Visit our website</h2>
              <Link href="/" aria-label="Go Back">
                <button className="capitalize bg-emerald-700 text-white font-semibold py-2 px-3 hover:underline mt-5 rounded-lg">
                  Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Page;
