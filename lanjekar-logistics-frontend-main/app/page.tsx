
import { Metadata } from "next";
 import HomePage from "@/Components/Home/HomePage";

export const metadata: Metadata = {
  title: "Lanjekar Logistics | Reliable and Efficient Logistics Solutions",
  description: "Explore efficient and tailored logistics services at Lanjekar Logistics, trusted by leading clients like Zepto, Burak Electric, and Burak Metering. Delivering excellence across industries.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    title: "Lanjekar Logistics | Reliable and Efficient Logistics Solutions",
    description: "Explore efficient and tailored logistics services at Lanjekar Logistics, trusted by leading clients like Zepto, Burak Electric, and Burak Metering. Delivering excellence across industries.",
    url: "https://lanjekarlogistics.com",
    locale: "en_us",
    siteName: "Lanjekar Logistics",
  },
  alternates: {
    canonical: "https://lanjekarlogistics.com",
  },
};

export default function Home() {
  
  return (
   <> 
     <HomePage/>
   </>
  );
}
