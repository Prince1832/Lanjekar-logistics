"use client"
import React from 'react'
import PageHeading from '../Home/pageHeading'
import Contactstructure from './Contactstructure'
import Mapsection from './Mapsection'
import Footer from '../Home/Footer'
import NavBar from '../Home/NavBar'
import SIdebar from '../Home/SIdebar'
import { useState } from 'react';
function Contactpage() {
  const [isOpen,setisOpen]=useState(false)
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
            <PageHeading heading='Contact Us'/>
            <Contactstructure/>
            <Mapsection/>
            <Footer/>
        </>
  )
}

export default Contactpage