"use client";
import React, { useCallback, useEffect, useState } from "react";
import PageHeading from "../Home/pageHeading";
import Blogrigthsection from "./Blogrigthsection";
import BlogCard from "./BlogCard";
import NavBar from "../Home/NavBar";
import SIdebar from "../Home/SIdebar";
import Footer from "../Home/Footer";
import axios from "axios";
import Searchform from "./Searchform";

type Author = {
  name: string;
};

interface DataObject {
  image: string;
  author: Author;
  _id: string;
  slug: string;
  readTime: string | undefined;
  description: string;
  title: string | undefined;
  banner: string | undefined;
  createdAt: string | undefined;
  id: number;
  name: string;
  createdby: string;
}

function BlogPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [blogs, setBlogs] = useState<DataObject[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchBlog = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:3001/blogs`);

      setBlogs(response.data.blogs);
    } catch (error) {
      console.error("Error fetching blog data:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBlog();
  }, [fetchBlog]);

  const cleanedSearchQuery = searchQuery.trim().replace(/\s+/g, " ");

  const filteredBlogs = blogs.filter((blog) => {
    return (
      blog.title?.toLowerCase().includes(cleanedSearchQuery.toLowerCase()) ||
      blog.description?.toLowerCase().includes(cleanedSearchQuery.toLowerCase())
    );
  });

  return (
    <>
      <NavBar
        isOpenFuntion={isOpen}
        setOpenFuntion={setIsOpen}
        normalimage="/Langekar-logo.webp"
        scrollimage="/Langekar-logo.webp"
        css="text-black"
      />
      <SIdebar isOpenFuntion={isOpen} setOpenFuntion={setIsOpen} />
      <PageHeading heading="Blogs" />

      <section className="w-full relative h-auto lanjekar-container flex-col flex sm:gap-10 lg:gap-15 py-10 md:py-20">
        <div className="max-w-[540px] h-fit flex flex-col gap-6 top-40">
          <Searchform
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>

        {loading ? (
          <div className="flex justify-center items-center w-full h-[10vh] mb-8">
            <p className="text-center text-xl text-gray-600">
              Loading blogs...
            </p>
          </div>
        ) : filteredBlogs.length === 0 ? (
          <div className="w-full h-[30vh] flex justify-center items-center">
            <p className="text-center text-xl text-gray-600 ">No blogs found</p>
          </div>
        ) : (
          <div className="w-full grid md:grid-cols-2 gap-10 justify-center items-center">
            {filteredBlogs.map((blog, index) => (
              <BlogCard
                key={index}
                image={blog.image}
                title={blog.title || "Untitled"}
                description={blog.description || "No description available."}
                readTime={blog.readTime || "Unknown"}
                createdby={blog.author.name || "Unknown author"}
                slug={blog.slug}
              />
            ))}
          </div>
        )}

        <Blogrigthsection />
      </section>

      <Footer />
    </>
  );
}
export default BlogPage;
