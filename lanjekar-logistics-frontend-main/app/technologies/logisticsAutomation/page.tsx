import React from "react";
import LogisticsAutomation from "@/Components/Technologies/logisticsAutomation";
import { mergeMetadata } from "@/app/layout";


export const metadata = mergeMetadata({
  title: "Logistics Automation Solutions | Optimize Operations with Lanjekar Logistics",
  description:
    "Discover cutting-edge logistics automation solutions by Lanjekar Logistics. Enhance operational efficiency and streamline supply chain management with advanced automation technologies.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    title: "Logistics Automation Solutions | Optimize Operations with Lanjekar Logistics",
    description:
      "Discover cutting-edge logistics automation solutions by Lanjekar Logistics. Enhance operational efficiency and streamline supply chain management with advanced automation technologies.",
    url: "/technologies/logistics-automation",
    locale: "en_us",
    siteName: "Lanjekar Logistics",
  },
  alternates: {
    canonical: "/technologies/logistics-automation",
  },
});

const page = () => {
  return <LogisticsAutomation />;
};

export default page;
