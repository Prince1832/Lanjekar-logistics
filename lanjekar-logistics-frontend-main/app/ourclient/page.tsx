import React from 'react';
import Ourclientpage from '@/Components/OurClient/Ourclientpage';
import { mergeMetadata } from '../layout';

export const metadata = mergeMetadata({
  title: "Our Clients | Trusted by Zepto, Burak Electric, and More",
  description: "Explore our esteemed clientele at Lanjekar Logistics, including industry leaders like Zepto, Burak Electric, and Burak Metering. Partner with us for reliable logistics solutions.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    title: "Our Clients | Trusted by Zepto, Burak Electric, and More",
    description: "Explore our esteemed clientele at Lanjekar Logistics, including industry leaders like Zepto, Burak Electric, and Burak Metering. Partner with us for reliable logistics solutions.",
    url: "/clients",
    locale: "en_us",
    siteName: "Lanjekar Logistics",
  },
  alternates: {
    canonical: "/clients",
  },
});

function page() {
  return <Ourclientpage />;
}

export default page;
