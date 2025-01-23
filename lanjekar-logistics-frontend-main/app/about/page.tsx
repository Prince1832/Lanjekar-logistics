
import React from "react";
import AboutPage from "@/Components/Home/about/AboutPage";
import { mergeMetadata } from "../layout";


export const metadata = mergeMetadata({
  title: "About Lanjekar Logistics | Part of Lanjekar Holding",
  description:
    "Learn about Lanjekar Logistics, a division of Lanjekar Holding, dedicated to providing exceptional logistics solutions for top-tier clients. Discover our journey, values, and expertise.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    title: "About Lanjekar Logistics | Part of Lanjekar Holding",
    description:
      "Learn about Lanjekar Logistics, a division of Lanjekar Holding, dedicated to providing exceptional logistics solutions for top-tier clients. Discover our journey, values, and expertise.",
    url: "/about",
    locale: "en_us",
    siteName: "Lanjekar Logistics",
  },
  alternates: {
    canonical: "/about",
  },
});

function page() {

  return (
    <>
      <AboutPage />
    </>
  );
}

export default page;
