import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getBlogs from "../firebaseconfig/blogs/firebasegetblogutil";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const blogsData = getBlogs();
    blogsData.then((blogs) => {
      const requiredBlog = blogs.filter((blog) => blog.id === id);
      setBlog(requiredBlog[0]);
    });
  }, [id]);

  if (!blog) return <div></div>;

  return (
    <div className="font-Lora container mx-auto px-4 py-20">
      <div className="text-center mt-20">
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start">
          <h1 className="text-6xl font-bold mb-6">{blog.heading}</h1>
        </div>
        <p className="text-xl mb-6 font-normal">{blog.description}</p>
      </div>
    </div>
  );
};

export default BlogDetail;
