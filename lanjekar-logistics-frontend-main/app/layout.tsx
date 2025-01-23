import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import { Plus_Jakarta_Sans, Noto_Sans } from "next/font/google";
import Provider from "./Provider";


const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
}); 

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export const metadata: Metadata = {
  title: "Sovorun Technology",
  description: "",
  metadataBase: new URL("https://sovorun.com"),
  twitter: {
    card: "summary_large_image",
    images: "/opengraph-image.png",
    site: "@sovorun",
  },
  openGraph: {
    title: "Sovorun Technology",
    description: "",
    images: [
      {
        url: "https://sovorun.com/opengraph-image.png", 
        width: 4800,
        height: 2520,
      },
    ],
    url: "https://sovorun.com",
    locale: "en_us",
    siteName: "sovorun",
  },

};

export function mergeMetadata(pageMetadata: Metadata): Metadata {
  return {
    ...metadata, 
    ...pageMetadata, 
    openGraph: {
      ...metadata.openGraph,
      ...pageMetadata.openGraph,
      images: metadata.openGraph?.images, 
    },
    twitter: {
      ...metadata.twitter,
      ...pageMetadata.twitter,
      images: metadata.twitter?.images,
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-K7ZZ5FC7" />
      <body
        className={` ${geistSans.variable} ${notoSans.className} ${geistMono.variable} ${plusJakartaSans.className}`}
      >
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}

