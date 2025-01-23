import React from "react";
import MobileApp from "@/Components/Technologies/mobileApp";
import { mergeMetadata } from "@/app/layout";


export const metadata = mergeMetadata({
  title: "Mobile App Solutions | Streamline Logistics with Lanjekar Logistics",
  description:
    "Explore mobile app solutions by Lanjekar Logistics for seamless logistics management. Enhance efficiency and stay connected on the go with our cutting-edge mobile apps.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    title: "Mobile App Solutions | Streamline Logistics with Lanjekar Logistics",
    description:
      "Explore mobile app solutions by Lanjekar Logistics for seamless logistics management. Enhance efficiency and stay connected on the go with our cutting-edge mobile apps.",
    url: "/technologies/mobile-app",
    locale: "en_us",
    siteName: "Lanjekar Logistics",
  },
  alternates: {
    canonical: "/technologies/mobile-app",
  },
});

const page = () => {
  return <MobileApp />;
};

export default page;
