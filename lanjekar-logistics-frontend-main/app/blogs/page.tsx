import React from "react";
import BlogPage from "@/Components/Blog/BlogPage";
import { mergeMetadata } from "../layout";

export const metadata = mergeMetadata({
  title: "Blogs - Your Ultimate Source for Knowledge and Insights",
  description:
    "Discover the latest blogs and articles, offering valuable insights and knowledge on a variety of topics. Stay updated and informed with our expert content.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    title: "Blogs - Your Ultimate Source for Knowledge and Insights",
    description:
      "Discover the latest blogs and articles, offering valuable insights and knowledge on a variety of topics. Stay updated and informed with our expert content.",
    url: "/blogs",
  },
  alternates: {
    canonical: `/blogs`,
  },
});

function page() {
  return <BlogPage />;
}

export default page;
