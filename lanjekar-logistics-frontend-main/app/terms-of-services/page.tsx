import TermsOfService from "@/Components/Home/TermsOfService";
import React from "react";
import { mergeMetadata } from "../layout";

export const metadata = mergeMetadata({
  title: "Terms of Services | Lanjekar Logistics",
  description:
    "Review the terms of services of using Lanjekar Logistics' services. Understand your rights, responsibilities, and our policies to ensure transparency and trust.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    title: "Terms of Services | Lanjekar Logistics",
    description:
      "Review the terms of services of using Lanjekar Logistics' services. Understand your rights, responsibilities, and our policies to ensure transparency and trust.",
    url: "/terms-of-services",
    locale: "en_us",
    siteName: "Lanjekar Logistics",
  },
  alternates: {
    canonical: "/terms-of-services",
  },
});

const page = () => {
  return <TermsOfService />;
};

export default page;
