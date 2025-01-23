import React from "react";
import RealtimeTracking from "@/Components/Technologies/realtimeTracking";
import { mergeMetadata } from "@/app/layout";

export const metadata = mergeMetadata({
  title: "Realtime Tracking | Advanced Logistics Solutions by Lanjekar Logistics",
  description:
    "Experience cutting-edge real-time tracking technology from Lanjekar Logistics. Monitor your shipments and ensure supply chain efficiency with our reliable solutions.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    title: "Realtime Tracking | Advanced Logistics Solutions by Lanjekar Logistics",
    description:
      "Experience cutting-edge real-time tracking technology from Lanjekar Logistics. Monitor your shipments and ensure supply chain efficiency with our reliable solutions.",
    url: "/technologies/realtime-tracking",
    locale: "en_us",
    siteName: "Lanjekar Logistics",
  },
  alternates: {
    canonical: "/technologies/realtime-tracking",
  },
});

const page = () => {
  return (
    <div>
      <RealtimeTracking />
    </div>
  );
};

export default page;
