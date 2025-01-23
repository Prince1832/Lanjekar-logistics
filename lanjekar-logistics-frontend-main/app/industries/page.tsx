import React from "react";
import { mergeMetadata } from "../layout";
import Industrypage from "@/Components/Industries/Industrypage";

export const metadata = mergeMetadata({
  title: "Industries We Serve | Lanjekar Logistics",
  description:
    "Explore the diverse industries that benefit from Lanjekar Logistics' services. From retail to manufacturing, we provide customized logistics solutions to meet your business needs.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    title: "Industries We Serve | Lanjekar Logistics",
    description:
      "Explore the diverse industries that benefit from Lanjekar Logistics' services. From retail to manufacturing, we provide customized logistics solutions to meet your business needs.",
    url: "/industries",
  },
  alternates: {
    canonical: `/industries`,
  },
});


function page() {
  return (
    <>
    <Industrypage/>
    </>
  )
}

export default page
