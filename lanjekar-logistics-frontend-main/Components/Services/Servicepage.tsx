"use client";
import React, { useEffect, useState } from "react";
import PageHeading from "@/Components/Home/pageHeading";
// import WhatWeDo from "../Home/WhatWeDo";
import Slidersection from "../Home/Slidersection";
import Footer from "../Home/Footer";
import WhatWeOffer from "../Home/WhatWeOffer";
import NavBar from "../Home/NavBar";
import SIdebar from "../Home/SIdebar";
import axios from "axios";

function Servicepage() {
  const [serviceData, setServiceData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setisOpen] = useState(false);

  useEffect(() => {
    const fetchService = async () => {
      try {
        // const response = await axios.get(`http://192.168.100.126:3001/service`);
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/service`);
        console.log("Service Data:", response.data);
        if (response.data && response.data.services) {
          setServiceData(response.data.services);
        }
      } catch (error) {
        console.error("Error fetching service data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchService();
  }, []);

  return (
    <>
      <NavBar
        isOpenFuntion={isOpen}
        setOpenFuntion={setisOpen}
        css="text-black"
        normalimage="/Langekar-logo.webp"
        scrollimage="/Langekar-logo.webp"
      />
      <SIdebar isOpenFuntion={isOpen} setOpenFuntion={setisOpen} />
      <PageHeading heading="Services" />
      <section className="w-full h-auto bg-secondary">
        {/* <WhatWeDo /> */}
      </section>
      {isLoading ? (
        <p className="h-[50vh] w-full flex justify-center items-center text-xl">
          Loading...
        </p>
      ) : (
        <WhatWeOffer service={serviceData || []} />
      )}
      <Slidersection />
      <Footer />
    </>
  );
}

export default Servicepage;
