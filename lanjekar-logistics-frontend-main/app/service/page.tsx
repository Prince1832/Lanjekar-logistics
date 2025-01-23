import React from 'react';
import Servicepage from '@/Components/Services/Servicepage';
import { mergeMetadata } from '../layout';

export const metadata = mergeMetadata({
  title: "Logistics Services | Tailored Solutions by Lanjekar Logistics",
  description: "Discover a wide range of logistics services from Lanjekar Logistics, including freight management, supply chain optimization, and customized solutions for businesses like Zepto and Burak Electric.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    title: "Logistics Services | Tailored Solutions by Lanjekar Logistics",
    description: "Discover a wide range of logistics services from Lanjekar Logistics, including freight management, supply chain optimization, and customized solutions for businesses like Zepto and Burak Electric.",
    url: "/service",
    locale: "en_us",
    siteName: "Lanjekar Logistics",
  },
  alternates: {
    canonical: "/service",
  },
});

function page() {
  return (
    <>
      <Servicepage />
    </>
  );
}

export default page;
