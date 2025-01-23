"use client";
import React from "react";
import Faqsection from "@/Components/Faqs/Faqsection";
import Footer from "@/Components/Home/Footer";
import NavBar from "@/Components/Home/NavBar";
import { useState } from "react";
import SIdebar from "../Home/SIdebar";
function Faqspage() {
  const [isOpen, setisOpen] = useState(false);
  return (
    <>
      <NavBar
        isOpenFuntion={isOpen}
        setOpenFuntion={setisOpen}
        normalimage="/Langekar-logo.webp"
        scrollimage="/Langekar-logo.webp"
        css="text-black"
      />
      <SIdebar isOpenFuntion={isOpen} setOpenFuntion={setisOpen} />
      <Faqsection  />
      <Footer />
    </>
  );
}

export default Faqspage;
