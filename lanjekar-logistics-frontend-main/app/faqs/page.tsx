import React from "react";
import { mergeMetadata } from "../layout";
import Faqspage from "@/Components/Faqs/Faqspage";

export const metadata = mergeMetadata({
  title: "FAQs - Frequently Asked Questions | Lanjekar Logistics",
  description:
    "Find answers to the most common questions about our logistics services. Get insights into our processes, solutions, and customer support at Lanjekar Logistics.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    title: "FAQs - Frequently Asked Questions | Lanjekar Logistics",
    description:
      "Find answers to the most common questions about our logistics services. Get insights into our processes, solutions, and customer support at Lanjekar Logistics.",
    url: "/faqs",
  },
  alternates: {
    canonical: `/faqs`,
  },
});

  
function page() {
  return (
    <>
    <Faqspage/>
    </>
  )
}

export default page