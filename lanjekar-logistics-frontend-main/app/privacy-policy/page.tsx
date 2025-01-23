import PrivacyPolicy from "@/Components/Home/PrivacyPolicy";
import React from "react";
import { mergeMetadata } from "../layout";

export const metadata = mergeMetadata({
  title: "Privacy Policy - Protecting Your Data with Transparency",
  description: "Learn about how Lanjekar Logistics collects, protects, and uses your personal data. We are committed to safeguarding your privacy with full transparency.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    title: "Privacy Policy - Protecting Your Data with Transparency",
    description: "Learn about how Lanjekar Logistics collects, protects, and uses your personal data. We are committed to safeguarding your privacy with full transparency.",
    url: "/privacy-policy",
    locale: "en_us",
    siteName: "Lanjekar Logistics",
  },
  alternates: {
    canonical: "privacy-policy",
  },
});

const page = () => {
  return <PrivacyPolicy />;
};

export default page;
