import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useSWR from "swr";
import Showdown from "showdown";
import getBlogs from "../firebaseconfig/blogs/firebasegetblogutil";
import LoadingDots from "./LoadingDots";
import { Markup } from "interweave";
import { formatDate } from "../utils/dateTimeUtil";

const BlogDetail = () => {
  const { id } = useParams();
  const { data: blogs, error } = useSWR("blogs", getBlogs);
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    if (blogs) {
      const requiredBlog = blogs.find((blog) => blog.id === id);
      setBlog(requiredBlog);
    }
  }, [id, blogs]);

  const isLoading = !blogs && !error;

  if (isLoading)
    return (
      <div className="font-Lora container mx-auto px-4 py-20">
        <div className="text-center mt-20">
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start">
            <h1 className="text-6xl font-bold mb-6">
              <LoadingDots />
            </h1>
          </div>
        </div>
      </div>
    );
  if (error) return <div>Error loading blog</div>;
  if (!blog) return <div>Blog not found</div>;

  return <BlogSection blog={blog} />;
};

const BlogSection = ({ blog }) => {
  const classMap = {
    h1: "text-3xl font-semibold",
    h2: "text-xl font-semibold leading-loose sm:px-2 md:px-2 py-2 md:py-2 ",
    p: "px-4 sm:px-6 md:px-8 py-4 md:py-8 leading-loose text-lg",
  };

  const bindings = Object.keys(classMap).map((key) => ({
    type: "output",
    regex: new RegExp(`<${key}(.*)>`, "g"),
    replace: `<${key} class="${classMap[key]}" $1>`,
  }));
  const converter = new Showdown.Converter({ extensions: [...bindings] });
  const description = converter.makeHtml(blog?.description);

  return (
    <main>
      <section
        id="content"
        className="prose prose-sm mx-auto font-Lora px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[18rem] py-6 md:py-20 lg:py-18 my-2"
      >
        <article>
          <header className="w-full mx-auto">
            <Link
              to="/"
              className="text-decoration-line: underline font-semibold leading-loose text-lg"
            >
              Back
            </Link>
            <h1
              style={{ marginBottom: "0" }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 break-words text-wrap"
            >
              {blog.heading}
            </h1>
            <p className="font-thin text-slate-500 leading-loose">
              Published on {formatDate(blog?.added_on)}
            </p>
          </header>
          <footer className="w-full mx-auto">
            <div
              style={{ height: "1.5em", margin: "2em 0 2.5em 0" }}
              className="flex items-center"
            >
              <img
                alt="Riley Egge depicted with a large curly black mustache"
                height="60"
                width="60"
                className="rounded-full flex mr-1.5"
                src="https://api.dicebear.com/7.x/notionists/svg?scale=150"
              />
              <div className="flex items-center">
                <div className="author">
                  <p htmlFor="author" className="font-semibold text-xl">
                    By Dumb Person
                  </p>
                </div>
              </div>
            </div>
          </footer>
          <figure>
            <img
              className="mx-auto w-full max-w-md h-auto"
              alt="A vintage, blue, slightly rusted truck with a wooden bed overflowing with pumpkins on an gloomy overcast day. Surrounding the truck are beautiful orange and white pumpkins varying from small to large."
              src={blog.blog_image}
            />
          </figure>
          <div>
            <Markup content={description} />
          </div>
        </article>
      </section>
    </main>
  );
};

export default BlogDetail;
