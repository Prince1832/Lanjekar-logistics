"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

export interface sidebarinterface {
  isOpenFuntion: boolean;
  setOpenFuntion: React.Dispatch<React.SetStateAction<boolean>>;
  css?: string;
  normalimage?: string;
  scrollimage?: string;
}

function NavBar({
  isOpenFuntion,
  setOpenFuntion,
  css,
  normalimage = "/default-logo.webp",
  scrollimage = "/default-scrolled-logo.webp",
}: sidebarinterface) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.pageYOffset > 1);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClasses = scrolled
    ? "bg-white text-black shadow-md"
    : `bg-transparent text-${css || "white"}`;

  return (
    <nav
      className={`w-full h-auto fixed top-0 z-50 flex items-center justify-center py-3 ${navbarClasses}`}
    >
      <div className="w-full lanjekar-container flex items-center justify-between">
        <Link href={"/"}>
          <Image
            src={scrolled ? scrollimage : normalimage}
            alt="Logo"
            height={200}
            width={200}
            className="w-[200px] object-contain sm:h-[35px] h-[30px] relative"
          />
        </Link>

        <ul className="relative h-auto hidden lg:flex items-center gap-5 md:gap-10 md:ml-10 mt-0">
          <Link
            href={"/"}
            className="text-p18 font-normal border-b-2 pt-1 border-transparent hover:border-yellow-400"
          >
            Home
          </Link>
          <Link
            href={"/about"}
            className="text-nowrap text-p18 font-normal border-b-2 pt-1 border-transparent hover:border-yellow-400"
          >
            About Us
          </Link>
          <Link
            href={"/service"}
            className="text-p18 font-normal border-b-2 pt-1 border-transparent hover:border-yellow-400"
          >
            Services
          </Link>
          <Link
            href={"/industries"}
            className="text-p18 font-normal border-b-2 pt-1 border-transparent hover:border-yellow-400"
          >
            Industries
          </Link>

          <Link
            href={"/career-page"}
            className="text-p18 font-normal border-b-2 pt-1 border-transparent hover:border-yellow-400"
          >
            Career
          </Link>

          <Link
            href={"/technologies"}
            className="text-p18 font-normal border-b-2 pt-1 border-transparent hover:border-yellow-400"
          >
            Technologies
          </Link>

          <Link
            href={"/blogs"}
            className="text-p18 font-normal border-b-2 pt-1 border-transparent hover:border-yellow-400"
          >
            Blogs
          </Link>
          <Link
            href="/contact"
            className="text-p18 sm:flex hidden font-normal px-5 py-3 border-2 border-yellow-400 bg-yellow-400 ml-3 hover:bg-white text-black hover:border-2 hover:border-yellow-400 transition-all duration-500"
          >
            Contact
          </Link>
        </ul>

        <ul className="flex justify-between lg:hidden items-center gap-5 w-fit">
          <Link
            href="/contact"
            className="hidden sm:flex lg:hidden text-p18 font-normal px-5 py-3 text-black bg-yellow-400 ml-3 hover:bg-yellow-500 transition-all duration-500"
          >
            Contact
          </Link>
          <RxHamburgerMenu
            className="text-[45px] text-yellow-400 lg:hidden"
            onClick={() => setOpenFuntion(!isOpenFuntion)}
            aria-label="Toggle menu"
          />
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
