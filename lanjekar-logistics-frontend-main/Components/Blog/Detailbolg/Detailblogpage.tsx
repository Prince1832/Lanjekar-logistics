"use client";
import React, { useCallback, useEffect, useState } from "react";
import Detailbanner from "./Detailbanner";
import DetailblogStructure from "./DetailblogStructure";
import axios from "axios";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";


type BlogDataInterface = {
  banner: string;  
  title: string;
  time: string;
  admin: string;
};

function Detailblogpage() {
  const [isOpen, setIsOpen] = useState(false);
  const [blogData, setBlogData] = useState<BlogDataInterface | null>(null); 
  const [relatedBlogs, setRelatedBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  console.log(params.slug);

  const fetchRecentData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/blogs/${params.slug}`
      );
      console.log(response.data.blog.banner);
      setBlogData(response.data.blog || null); 
      setRelatedBlogs(response.data.relatedBlogs || []); 
    } catch (error) {
      console.error("Error fetching recent blogs:", error);
      setBlogData(null);  
    } finally {
      setLoading(false);
    }
  }, [params.slug]);

  useEffect(() => {
    fetchRecentData();
  }, [fetchRecentData]);


  if (loading) {
    return (
      <p className="flex justify-center items-center h-screen w-full font-semibold text-large">
        Loading...
      </p>
    );
  }

 
  if (!blogData) {
    return (
      <div className="flex flex-col gap-2 justify-center items-center absolute left-[40%] ml-[-40px] top-[45%] mt-[-40px]">
        <div className="flex gap-3">
          <h2 className="text-5xl">Page Not Found</h2>
          <Image src={"/alert.webp"} alt="alert" width={50} height={50} />
        </div>
        <p className="text-xl">
          Sorry, the blog you are looking for does not exist.
        </p>
        <Link href="/blogs">
          <button className="bg-blue-500 text-white px-4 py-2 rounded mt-5 hover:bg-blue-600">
            Back to Blog List
          </button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <section className="relative pb-20">
        <Detailbanner
          isOpenFuntion={isOpen}
          setOpenFuntion={setIsOpen}
          bannerimage={blogData.banner} 
        />
        <section className="absolute -bottom-5 lg:-bottom-10 w-full h-auto flex flex-col items-center justify-center z-[10]">
          <div className="w-full md:max-w-[60%] lg:max-w-[50%] flex flex-col items-center px-20 py-5 gap-4 bg-white">
            <h1 className="text-h2 font-semibold text-black text-center leading-[1] ">
              {blogData.title}
            </h1>
            <div className="flex items-center justify-center gap-5">
              <p className="text-[17px] font-normal text-black">
                {blogData.time}
              </p>
              <p className="text-[17px] font-normal text-black">
                {blogData.admin}
              </p>
            </div>
          </div>
        </section>
      </section>

      <DetailblogStructure blogData={blogData} relatedBlogs={relatedBlogs} />
    </>
  );
}

export default Detailblogpage;
