"use client";
import React, { useEffect, useState } from "react";
import ServiceDetailsection from "./ServiceDetailsection";
import Footer from "../Home/Footer";
import { useParams } from "next/navigation";
import Detailbanner from "../Blog/Detailbolg/Detailbanner";
import SIdebar from "../Home/SIdebar";
import Serviceformsection from "./Serviceformsection";
import axios from "axios";

function Detailpage() {
  const [pageheading, setPageHeading] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [bannerImage, setBannerImage] = useState("");
  const [serviceData, setServiceData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  const slug = useParams();

  useEffect(() => {
    const fetchTeam = async () => {
      setIsLoading(true); 
    

      try {
        if (slug?.slug) {
          const parts = (slug.slug as string).split("-");
          const formattedHeading = parts.join(" ");
          setPageHeading(formattedHeading);

          const response = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/service/${slug.slug}`
          );

          if (response.data && response.data.service) {
            setServiceData(response.data.service);
            setBannerImage(response.data.service.image || "/bannerimage.avif");
          } else {
            setServiceData(null); 
          }
        }
      } catch (error) {
        console.error("Error fetching team data:", error);
  
      } finally {
        setIsLoading(false); 
      }
    };

    fetchTeam();
  }, [slug?.slug]);

  return (
    <>
      <SIdebar isOpenFuntion={isOpen} setOpenFuntion={setIsOpen} />
      <section className="relative pb-20">
        <Detailbanner
          isOpenFuntion={isOpen}
          setOpenFuntion={setIsOpen}
          bannerimage={bannerImage}
        />
        <section className="absolute -bottom-5 lg:-bottom-0 w-full h-auto flex flex-col items-center justify-center py-10">
          <div className="w-full md:max-w-[60%] lg:max-w-[50%] flex flex-col items-center px-20 py-7 gap-4 bg-white z-10">
            <h1 className="text-h2 font-semibold text-black text-center leading-[1] capitalize text-nowrap">
              {pageheading}
            </h1>
          </div>
        </section>
      </section>

      <section className="w-full relative h-auto lanjekar-container grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-20 py-5 mt-5 lg:mt-20">
        
        {isLoading ? (
          <p className="h-[60vh] flex justify-center items-center text-lg">
            Loading service details...
          </p>
        ) : serviceData ? (
          <ServiceDetailsection serviceData={serviceData} />
        ) : (
          <p className="h-[20vh] flex justify-center items-center text-lg text-gray-500">
            No Data Found
          </p>
        )}
        <section className="w-full lg:sticky top-20 z-10 h-auto">
          <Serviceformsection />
        </section>
      </section>
      <Footer />
    </>
  );
}

export default Detailpage;




