import React from "react";
import { mergeMetadata } from "../layout";
import Contactpage from "@/Components/Contact/Contactpage";

export const metadata = mergeMetadata({
  title: "Contact Us - Get in Touch with Lanjekar Logistics",
  description:
    "Have questions or need assistance? Reach out to Lanjekar Logistics through our Contact Us page. We are here to help with all your logistics inquiries and support.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    title: "Contact Us - Get in Touch with Lanjekar Logistics",
    description:
      "Have questions or need assistance? Reach out to Lanjekar Logistics through our Contact Us page. We are here to help with all your logistics inquiries and support.",
    url: "/contact",
  },
  alternates: {
    canonical: `/contact`,
  },
});


function page() {
  return (
    <>
         <Contactpage/>
    </>
  )
}

export default page