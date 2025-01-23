"use client";
import React from "react";
import SectionHeading from "./sectionHeading";
import ArticleCard from "./ArticleCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { NEXT_PUBLIC_API_URL } from "@/config";
import Link from "next/link";

interface DataObject {
  author: unknown;
  _id: string;
  slug: string | undefined;
  readTime: string | undefined;
  description: string;
  title: string | undefined;
  banner: string | undefined;
  createdAt: string | undefined;
  id: number;
  name: string;
  createdby: string; 
}

function OurArticles() {
  const [data, setData] = useState<DataObject[]>([]);

  function Getdata() {
    axios
      .get(`${NEXT_PUBLIC_API_URL}`)
      .then((response) => {
        console.log(response.data.latestblog); 
        setData(response.data.latestblog);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  useEffect(() => {
    Getdata();
  }, []);

  return (
    <>
      {data.length > 0 && (
        <section className="w-full relative h-full flex flex-col  md:gap-10 bg-secondary py-10 md:py-20">
          <SectionHeading
            title="Our Latest News"
            smalltitle="Our articles"
            css="items-center justify-center"
          />

          <div className="w-full lanjekar-container gap-9 xl:gap-10 grid sm:grid-cols-2 lg:grid-cols-3 relative">
            {data.map((obj, index) => (
              <div className="relative w-full h-full" key={index}>
                {index <= 3 && (
                  <Link
                    href={`blogs/${obj.slug}`}
                    className="w-full h-full relative underline-none"
                    key={index}
                  >
                    <ArticleCard
                      banner={`${obj.banner}`} 
                      title={`${obj.title}`}
                      showpara={`${obj.description}`} 
                      createAt={obj.createdAt} 
                      createdby={obj.createdby} 
                      acticlefor={""}
                    />
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="w-full relative flex items-center justify-center lanjekar-container">
            <button className="text-[16px] mt-2 font-semibold border-2 border-yellow-500 bg-yellow-500 hover:bg-white hover:text-yellow-400 hover:border-2 hover:border-yellow-500 transition-all duration-500 p-5">
              VIEW MORE POSTS
            </button>
          </div>
        </section>
      )}
    </>
  );
}

export default OurArticles;
