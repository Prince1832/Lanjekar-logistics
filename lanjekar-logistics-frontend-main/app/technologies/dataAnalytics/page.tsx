import DataAnalytics from "@/Components/Technologies/dataAnalytics";
import React from "react";
import { mergeMetadata } from "@/app/layout";

export const metadata = mergeMetadata({
  title: "Data Analytics Solutions | Unlock Insights with Lanjekar Logistics",
  description:
    "Leverage powerful data analytics solutions by Lanjekar Logistics to make informed decisions, optimize operations, and drive business growth. Transform your data into actionable insights.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    title: "Data Analytics Solutions | Unlock Insights with Lanjekar Logistics",
    description:
      "Leverage powerful data analytics solutions by Lanjekar Logistics to make informed decisions, optimize operations, and drive business growth. Transform your data into actionable insights.",
    url: "/technologies/data-analytics",
    locale: "en_us",
    siteName: "Lanjekar Logistics",
  },
  alternates: {
    canonical: "/technologies/data-analytics",
  },
});

const page = () => {
  return <DataAnalytics />;
};

export default page;
