"use client";
import React from "react";
// import PageHeading from "@/Components/Home/pageHeading";
import Slidersection from "../Home/Slidersection";
import Footer from "../Home/Footer";
import NavBar from "../Home/NavBar";
import SIdebar from "../Home/SIdebar";
import { useState } from "react";
import IndustriesOffer from "../Home/IndustriesOffer";
import IndustriesBanner from "./IndustriesBanner";

function Industrypage() {
  const [isOpen, setisOpen] = useState(false);

  return (
    <>
      <NavBar
        isOpenFuntion={isOpen}
        setOpenFuntion={setisOpen}
        normalimage="/Langekar-white-logo.webp"
        scrollimage="/Langekar-logo.webp"
      />

      {/* <HomeBanner isOpenFuntion={isOpen} setOpenFuntion={setisOpen} /> */}
      <IndustriesBanner />
      <SIdebar isOpenFuntion={isOpen} setOpenFuntion={setisOpen} />
      {/* <PageHeading heading="Industries" /> */}
      <section className="w-full h-full bg-blue-950 md:p-10 px-0 py-7">
        <IndustriesOffer />
      </section>
      <Slidersection />
      <Footer />
    </>
  );
}

export default Industrypage;
