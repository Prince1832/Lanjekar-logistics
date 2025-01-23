import React from "react";
// import Blogrigthsection from "../Blogrigthsection";
import BlogCard from "../BlogCard";
import Image from "next/image";
import Footer from "@/Components/Home/Footer";

import BlogForm from "../BlogForm";


function DetailblogStructure({ blogData, relatedBlogs }: any) {


  console.log("blogData", blogData);


  return (
    <>
      <section className="w-full relative h-auto lanjekar-container flex-col-reverse flex sm:grid md:grid-cols-[1.5fr_1fr] gap-10 lg:gap-20 py-10 md:py-20">
        <div className="w-full relative h-auto flex flex-col gap-3 items-start">
          <h2 className="text-h3 font-semibold text-black">{blogData.title}</h2>

          <Image
            className="w-full h-[400px] object-cover"
            src={`http://localhost:3001${blogData.image}`}
            alt={blogData.title || "Blog Image"}
            width={200}
            height={300}
          />
          <p className="text-[17px] font-medium text-black">
            {blogData.description}
          </p>
          <p className="text-[17px] font-medium text-black">
            {blogData.content}
          </p>
        </div>
        <div className="hidden md:block w-full">
          <BlogForm />
        </div>
      </section>
      <div className="hidden md:block w-full lanjekar-container mb-16">
        <h3 className="text-h3 font-semibold text-black">Related Blogs</h3>
        <div className="flex gap-4 mt-7">
          {relatedBlogs.map(
            (
              blog: {
                image: string;
                title: any;
                description: any;
                createdAt: any;
                author: { name: any };
                slug: string;
              },
              index: React.Key | null | undefined
            ) => (
              <BlogCard
                key={index}
                image={blog.image}
                title={blog.title || "Untitled"}
                description={blog.description || "No description available."}
                time={blog.createdAt || "Unknown"}
                createdby={blog.author.name || "Unknown author"}
                slug={blog.slug}
              />
            )
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DetailblogStructure;
