"use client";
import { BsArrowLeft } from "react-icons/bs";
import React from "react";
import { useRouter } from "next/navigation";

function NotFound() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="bg-white grid gap-8 justify-center content-center justify-items-center items-center h-[100vh]">
      <h1 className="text-[10rem] font-bold text-fontPrimary leading-none text-center">
        404
      </h1>
      <p className="text-fontPrimary font-bold text-xl text-center">
        Sorry, we can’t find the page you’re looking for.
      </p>
      <button
        className="w-fit flex items-center gap-3 bg-red-600 py-3 px-5 text-white group"
        onClick={handleBack}
        type="button"
      >
     
        <BsArrowLeft className="text-xl transform transition-all duration-500 group-hover:-translate-x-2" />
        Go Back
      </button>
    </div>
  );
}

export default NotFound;
