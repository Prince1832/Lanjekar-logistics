'use client'
import React from 'react'
import HomeBanner from "@/Components/Home/HomeBanner";
import WhatWeDo from "@/Components/Home/WhatWeDo";
import Departmentsection from "@/Components/Home/Department";
import Slidersection from "@/Components/Home/Slidersection";
import WeOffersection from "@/Components/Home/WeOffersection";
import OurArticles from "@/Components/Home/OurArticles";
import Mapwithform from "@/Components/Home/Mapwithform";
import Footer from "@/Components/Home/Footer";
import SIdebar from "@/Components/Home/SIdebar";
import { useState } from 'react';


function HomePage() {
    const [isOpen,setisOpen]=useState(false)
  return (
    <>
      <HomeBanner isOpenFuntion={isOpen} setOpenFuntion={setisOpen} />
      <SIdebar isOpenFuntion={isOpen} setOpenFuntion={setisOpen} />
      <Departmentsection/>
      <WhatWeDo/>
      <Slidersection/>
      <WeOffersection/>
      <OurArticles/>
      <Mapwithform/>
      <Footer/>
    </>
  )
}

export default HomePage