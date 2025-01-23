import React from "react";
import Link from "next/link";

export interface sidebarinterface {
  isOpenFuntion: boolean;
  setOpenFuntion: React.Dispatch<React.SetStateAction<boolean>>;
}
function SIdebar({ isOpenFuntion }: sidebarinterface) {
  return (
    <section
      className={` h-screen flex flex-col items-center px-8 sm:px-20 justify-start right-0 ${
        isOpenFuntion ? "" : " translate-x-full"
      } transition-all duration-500  fixed z-20 top-0 py-20 bg-white sm:w-1/2 lg:w-1/4 w-[70%]`}
    >
      <ul className="flex flex-col gap-5 relative h-auto text-white font-semibold mt-1 text-center">
        <Link
          href={"/"}
          className="text-p28 py-2 border-b border-transparent hover:border-black text-black "
        >
          Home
        </Link>
        <Link
          href={"/about"}
          className="text-p28 py-2 border-b border-transparent hover:border-black text-black "
        >
          About us
        </Link>
        <Link
          href={"/service"}
          className="text-p28 py-2 border-b border-transparent hover:border-black text-black "
        >
          Services
        </Link>
        <Link
          href={"/industries"}
          className="text-p28 py-2 border-b border-transparent hover:border-black text-black "
        >
          Industries
        </Link>
        <Link
          href={"/career-page"}
          className="text-p28 py-2 border-b border-transparent hover:border-black text-black "
        >
          Career
        </Link>
        <Link
          href={"/technologies"}
          className="text-p28 py-2 border-b border-transparent hover:border-black text-black "
        >
          Technologies
        </Link>
        <Link
          href={"/blogs"}
          className="text-p28 py-2 border-b border-transparent hover:border-black text-black "
        >
          Blogs
        </Link>

        <Link
          href="/contact"
          className="text-p18 font-medium px-5 py-3 bg-yellow-400 text-black sm:hidden"
        >
          Contact
        </Link>
      </ul>
    </section>
  );
}

export default SIdebar;
