import React from "react";
import { CiFacebook } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
// import { FiTwitter } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer className="w-full relative bg-blue-950 ">
      <div className="w-full  grid md:grid-cols-[1fr_1fr] lg:grid-cols-[1.5fr_1fr_1fr] items-center lg:items-start justify-center lanjekar-container md:py-20 py-10 gap-10 md:gap-20 lg:gap-40">
        <div>
          <Link href={"/"}>
            <Image
              src={"/Langekar-white-logo.webp"}
              alt="Langekar-logo"
              height={200}
              width={200}
              className="w-[250px] object-contain sm:h-[70px] relative mb-7"
            />
          </Link>

          <h2 className="text-h3 font-semibold text-white leading-[1.2]">
            Trust Us to Deliver Your Cargo with Care and Precision!
          </h2>
        </div>

        {/* <ul className="flex flex-col gap-4 w-full">
          <li className="text-h5 font-semibold w-full text-white">
            Contact Us
          </li>

          <li className="text-p18 font-semibold w-fit text-white cursor-pointer">
            example@example.com
          </li>

          <li className="text-p18 font-semibold w-fit text-white">
            +91 79779 07989
          </li>
        </ul> */}

        <ul className="flex flex-col gap-4 w-full">
          <li className="text-p18 font-semibold w-fit text-white cursor-pointer">
            <Link href="mailto:example@example.com">
              info@lanjekarlogistics.com
            </Link>
          </li>

          <li className="text-p18 font-semibold w-fit text-white">
            <Link href="tel:+917977907989">+91 79779 07989</Link>
          </li>
        </ul>

        {/* <SubscriptionForm /> */}
        <ul className="flex flex-col gap-5 ">
          <li className="text-h5 font-semibold text-white">Address</li>

          <li className=" text-[17px] font-normal text-white">
            601-B, Virani Business Center, Opp Bharat Gears Limited, Kausa
            Mumbra, Thane 400612.
          </li>
          <li className="flex item-center gap-4 ">
            <Link
              href="https://www.facebook.com/lanjekarlogistics/"
              target="_blank"
              passHref
            >
              <CiFacebook
                className="text-[45px] rounded-full border border-white p-2 text-white cursor-pointer"
                aria-label="Facebook"
              />
            </Link>

            <Link
              href="https://www.instagram.com/lanjekarlogistics/"
              target="_blank"
              passHref
            >
              <IoLogoInstagram
                className="text-[45px] rounded-full border border-white p-2 text-white cursor-pointer"
                aria-label="Instagram"
              />
            </Link>

            {/* <FiTwitter className="text-[45px] rounded-full border border-white p-2 text-white cursor-pointer" /> */}
          </li>
        </ul>
      </div>
      <div className="w-full relative h-auto py-5 border-t border-white flex justify-between lanjekar-container ">
        <ul className="xl:flex items-center gap-5 hidden w-fit relative">
          <Link
            href={"/about"}
            className="text-p18 font-medium text-white group relative"
          >
            About
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transform origin-bottom-right group-hover:w-full transition-all duration-300 ease-out"></span>
          </Link>
          <Link
            href={"/service"}
            className="text-p18 font-medium text-white group relative"
          >
            Services
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transform origin-bottom-right group-hover:w-full transition-all duration-300 ease-out"></span>
          </Link>
          <Link
            href={"/industries"}
            className="text-p18 font-medium text-white group relative"
          >
            Industries
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transform origin-bottom-right group-hover:w-full transition-all duration-300 ease-out"></span>
          </Link>
          <Link
            href={"/ourclient"}
            className="text-p18 font-medium text-white group relative"
          >
            Our Clients
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transform origin-bottom-right group-hover:w-full transition-all duration-300 ease-out"></span>
          </Link>
          <Link
            href={"/career-page"}
            className="text-p18 font-medium text-white group relative"
          >
            Career
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transform origin-bottom-right group-hover:w-full transition-all duration-300 ease-out"></span>
          </Link>
          <Link
            href={"/faqs"}
            className="text-p18 font-medium text-white group relative"
          >
            Faqs
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transform origin-bottom-right group-hover:w-full transition-all duration-300 ease-out"></span>
          </Link>

          <Link
            href={"/privacy-policy"}
            className="text-p18 font-medium text-white group relative"
          >
            Privacy policy
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transform origin-bottom-right group-hover:w-full transition-all duration-300 ease-out"></span>
          </Link>
          <Link
            href={"/terms-of-services"}
            className="text-p18 font-medium text-white group relative"
          >
            Terms of Services
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transform origin-bottom-right group-hover:w-full transition-all duration-300 ease-out"></span>
          </Link>
        </ul>
        <h2 className="text-white font-normal text-[16px] ">
          Lanjekar logistics © 2024. All Rights Reserved.
        </h2>
      </div>
    </footer>
  );
}

export default Footer;
