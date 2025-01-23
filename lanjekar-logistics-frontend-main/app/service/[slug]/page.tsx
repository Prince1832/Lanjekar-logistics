import React from "react";
import Detailpage from "@/Components/Services/Detailpage";
import axios from "axios";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/service/${slug}`;

  try {
    const response = await axios.get(apiUrl);
    const seoData = response.data.service;

    return {
      title: seoData?.metaTitle || "Logistics Services - Lanjekar Logistics",
      description: seoData?.metaDescription || "Discover the range of logistics services provided by Lanjekar Logistics, tailored to meet your business needs, including freight management, supply chain optimization, and more.",
      robots: (() => {
        let index: boolean | undefined;
        let follow: boolean | undefined;

        switch (true) {
          case seoData?.indexing?.includes("noindex, follow"):
            index = false;
            follow = true;
            break;
          case seoData?.indexing?.includes("noindex") && seoData?.indexing?.includes("nofollow"):
            index = false;
            follow = false;
            break;
          case seoData?.indexing?.includes("noindex"):
            index = false;
            break;
          case seoData?.indexing?.includes("nofollow"):
            follow = false;
            break;
          default:
            index =
              seoData?.indexing?.includes("max-video-preview") &&
              seoData?.indexing?.includes("max-image-preview") &&
              seoData?.indexing?.includes("max-snippet");

            follow =
              seoData?.indexing?.includes("max-video-preview") &&
              seoData?.indexing?.includes("max-image-preview") &&
              seoData?.indexing?.includes("max-snippet");
            break;
        }

        const robotsConfig: any = {};
        if (index !== undefined) robotsConfig.index = index;
        if (follow !== undefined) robotsConfig.follow = follow;

        const otherDirectives = seoData?.indexing
          ?.split(", ")
          .reduce((acc: any, directive: any) => {
            if (
              !directive.includes("noindex") &&
              !directive.includes("follow")
            ) {
              const [key, value] = directive.split(":");
              acc[key] = value;
            }
            return acc;
          }, {});

        return { ...robotsConfig, ...otherDirectives };
      })(),

      openGraph: {
        title: seoData?.metaTitle || "Logistics Services - Lanjekar Logistics",
        description: seoData?.metaDescription || "Discover the range of logistics services provided by Lanjekar Logistics, tailored to meet your business needs, including freight management, supply chain optimization, and more.",
        url: `/service/${slug}`,
        locale: "en_us",
        siteName: "Lanjekar Logistics",
      },
      alternates: {
        canonical: `/service/${seoData.slug}`,
      },
    };
  } catch (error) {
    console.error("Error fetching SEO data:", error);
    return {
      title: "Error",
      description: "Error fetching SEO data",
    };
  }
}

function page() {
  return <Detailpage />;
}

export default page;
