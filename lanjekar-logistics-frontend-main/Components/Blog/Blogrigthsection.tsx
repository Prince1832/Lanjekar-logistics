import React from "react";
import RecentBlogList from "./RecentBlogList";

const BlogRightSection = () => {


  return (
    <section className="max-w-[450px] h-fit flex flex-col items-start gap-6 top-40">
      {/* <RecentBlogList
        key={blog.slug} 
        title={blog.slug} 
        createdby={blog.createdby}
        time={blog.createdAt}
        slug={blog.slug}
      /> */}
      <RecentBlogList image={""} title={""} createdby={""} time={""} />
    </section>
  );
};

export default BlogRightSection;
