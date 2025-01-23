import React from "react";
import TechnologiesPage from "@/Components/Technologies/TechnologiesPage";
import axios from "axios";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/technologies/${slug}`;

  try {
    const response = await axios.get(apiUrl);
    const seoData = response.data.technology;

    return {
      title: seoData?.metaTitle || "Technologies We Use - Lanjekar Logistics",
      description: seoData?.metaDescription || "Explore the advanced technologies employed by Lanjekar Logistics, enhancing our logistics and supply chain management services to ensure efficiency and reliability.",
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
        title: seoData?.metaTitle || "Technologies We Use - Lanjekar Logistics",
        description: seoData?.metaDescription || "Explore the advanced technologies employed by Lanjekar Logistics, enhancing our logistics and supply chain management services to ensure efficiency and reliability.",
        url: `/technologies/${slug}`,
        locale: "en_us",
        siteName: "Lanjekar Logistics",
      },
      alternates: {
        canonical: `/technologies`,
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
  return <TechnologiesPage />;
}

export default page;
