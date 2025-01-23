"use client";

import React from "react";
import NavBar from "../Home/NavBar";
import ClientSection from "./ClientSection";
import PageHeading from "../Home/pageHeading";
import Peopleclientsection from "./Peopleclientsection";
import Footer from "../Home/Footer";
import SIdebar from "../Home/SIdebar";
import { useState } from "react";

function Ourclientpage() {
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
      <PageHeading heading={"Our Clients"} />
      <section className="bg-secondary w-full relative py-20 h-auto">
        <ClientSection />
      </section>
      <Peopleclientsection />
      <Footer />
    </>
  );
}

export default Ourclientpage;
