import React from "react";
import DetailTechnologyPage from "@/Components/Technologies/DetailTechnologyPage";
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
      title: seoData?.metaTitle || "Technology Details - Lanjekar Logistics",
      description: seoData?.metaDescription || "Learn more about the advanced technologies used by Lanjekar Logistics to optimize supply chain and logistics solutions, ensuring efficiency and customer satisfaction.",
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
        title: seoData?.metaTitle || "Technology Details - Lanjekar Logistics",
        description: seoData?.metaDescription || "Learn more about the advanced technologies used by Lanjekar Logistics to optimize supply chain and logistics solutions, ensuring efficiency and customer satisfaction.",
        url: `/technologies/${slug}`,
        locale: "en_us",
        siteName: "Lanjekar Logistics",
      },
      alternates: {
        canonical: `/technologies/${seoData.slug}`,
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

function Page() {
  return <DetailTechnologyPage />;
}

export default Page;
