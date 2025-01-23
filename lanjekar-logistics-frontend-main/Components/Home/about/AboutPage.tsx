"use client";
import React from "react";
import NavBar from "../NavBar";
import AboutService from "./aboutService";

import PageHeading from "../pageHeading";
import SIdebar from "../SIdebar";
import { useState } from "react";
import Departmentsection from "../Department";
import OurTeam from "./OurTeam";
import Slidersection from "../Slidersection";
import Footer from "../Footer";
function AboutPage() {
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
      <SIdebar isOpenFuntion={isOpen} setOpenFuntion={setisOpen} />
      <PageHeading heading={"About"} />
      <AboutService />
      <Departmentsection />
      <OurTeam />
      <Slidersection />
      <Footer />
    </>
  );
}

export default AboutPage;
