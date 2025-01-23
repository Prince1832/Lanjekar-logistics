"use client";
import React, { useEffect, useState } from "react";
import Footer from "../Home/Footer";
import { useParams } from "next/navigation";
import SIdebar from "../Home/SIdebar";
import Serviceformsection from "../Services/Serviceformsection";
import IndustryDetailsection from "./IndustryDetailsection";
import axios from "axios";
import Detailbanner from "../Blog/Detailbolg/Detailbanner";

function IndustriesDetailpage() {
  const [pageheading, setpageheading] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [bannerImage, setBannerImage] = useState("");
  const [industryData, setIndustryData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const slug = useParams();

  // useEffect(() => {
  //   if (slug.slug) {
  //     console.log("Slug:", slug.slug);
  //     const parts = (slug.slug as string).split("-");
  //     const formattedHeading = parts.join(" ");
  //     setpageheading(formattedHeading);

  //     console.log(slug.slug);

  //     switch (slug.slug) {
  //       case "e-commerce":
  //         setBannerImage("/e-commerce.webp");

  //         break;
  //       case "Healthcare":
  //         setBannerImage("/healthcare.webp");
  //         break;
  //       case "Manufacturing":
  //         setBannerImage("/manufacturing.webp");
  //         break;
  //       case "Retail":
  //         setBannerImage("/retail.webp");
  //         break;
  //       case "Automotive":
  //         setBannerImage("/automotive.webp");
  //         break;
  //       default:
  //         setBannerImage("/e-commerce.webp");
  //         break;
  //     }
  //   }
  // }, [slug]);
  

  useEffect(() => {
    const fetchTeam = async () => {
      setIsLoading(true);
      try {
        if (slug?.slug) {
          const parts = (slug.slug as string).split("-");
          const formattedHeading = parts.join(" ");
          setpageheading(formattedHeading);

          const response = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/industries/${slug.slug}`
          );

          console.log(response);
          setIndustryData(response.data.industry);
          setBannerImage(response.data.industry.image || "/bannerimage.avif");
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
            <h1 className="text-h2 font-semibold text-black text-center leading-[1] capitalize">
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
        ) : industryData ? (
          <IndustryDetailsection industryData={industryData}/>
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

export default IndustriesDetailpage;
