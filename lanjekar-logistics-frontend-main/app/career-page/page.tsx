import React from "react";
import { mergeMetadata } from "../layout";
import CareerPage from "@/Components/Career/CareerPage";

export const metadata = mergeMetadata({
  title: "Careers at Lanjekar Logistics - Join Our Team",
  description:
    "Explore exciting career opportunities at Lanjekar Logistics. Join our team of professionals and contribute to innovative logistics solutions that make a difference.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    title: "Careers at Lanjekar Logistics - Join Our Team",
    description:
      "Explore exciting career opportunities at Lanjekar Logistics. Join our team of professionals and contribute to innovative logistics solutions that make a difference.",
    url: "/career-page",
  },
  alternates: {
    canonical: `/career-page`,
  },
});


const page = () => {
  return <CareerPage />;
};

export default page;
