import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import Showdown from "showdown";
import image from "../assets/picfive.png";
import getBlogs from "../firebaseconfig/blogs/firebasegetblogutil";
import LoadingDots from "./LoadingDots";

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
  const converter = new Showdown.Converter();
  const description = converter.makeHtml(blog.description);

  return (
    <main>
      <section
        id="content"
        className="prose lg:prose-2xl container mx-auto font-Lora px-[12rem] py-[12rem] my-2"
      >
        <article>
          <header className="w-full mx-auto">
            <h1
              style={{ marginBottom: "0" }}
              className="text-6xl font-bold mb-6 break-words"
            >
              {blog.heading}
            </h1>
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
                  <p rel="author" className="font-semibold">
                    By Dumb Person
                  </p>
                </div>
              </div>
              <div className="flex flex-1 justify-end items-center">
                <div className="py-[10px] font-semibold pb-8">
                  Friday,{" "}
                  <time
                    pubdate="true"
                    dateTime="2022-10-14"
                    title="October 14th, 2022"
                  >
                    October 14th, 2022
                  </time>
                </div>
                <div>
                  <p aria-label="Share this article" href="#">
                    <i className="fa-solid fa-share-from-square text-2-xl"></i>
                  </p>
                </div>
              </div>
            </div>
          </footer>
          <figure>
            <img
              className=""
              alt="A vintage, blue, slightly rusted truck with a wooden bed overflowing with pumpkins on an gloomy overcast day. Surrounding the truck are beautiful orange and white pumpkins varying from small to large."
              src={image}
            />
          </figure>
          <div className="md:px-8 py-8 leading-loose">
            <div
              dangerouslySetInnerHTML={{
                __html: description,
              }}
            ></div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default BlogDetail;
