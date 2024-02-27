import React from "react";
import useSWR from "swr";
import getBlogs from "../firebaseconfig/blogs/firebasegetblogutil";
import { useNavigate } from "react-router-dom";
import Showdown from "showdown";
import LoadingDots from "./LoadingDots";
import { Markup } from "interweave";

function BlogList() {
  const classMap = {
    p: "overflow-hidden overflow-ellipsis whitespace-nowrap",
  };

  const bindings = Object.keys(classMap).map((key) => ({
    type: "output",
    regex: new RegExp(`<${key}(.*)>`, "g"),
    replace: `<${key} class="${classMap[key]}" $1>`,
  }));

  const converter = new Showdown.Converter({
    simpleLineBreaks: false,
    extensions: [...bindings],
  });
  const { data: blogs, error } = useSWR("blogs", getBlogs);

  if (error) return <div className="text-red-700">Failed to load</div>;
  if (!blogs) return <LoadingDots />;
  return (
    <>
      {" "}
      <h1 className="font-bold text-5xl">Dumb Blog Section</h1>
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-wrap justify-center gap-4 lg:gap-4">
          {blogs.map((blog, index) => {
            return <Card key={index} data={blog} converter={converter} />;
          })}
        </div>
      </div>
    </>
  );
}
const Card = ({ data, converter }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/${data.id}`);
  };
  return (
    <article className="bg-white flex flex-col max-w-xs overflow-hidden rounded-lg shadow py-4">
      <img src={data.thumbnail_image} alt="" onClick={handleClick} />
      <div className="px-4 py-6">
        <h2 className="font-semibold text-2xl">{data.heading}</h2>
        <div className="py-2">
          <Markup content={converter.makeHtml(data?.card_description)} />
        </div>
      </div>
    </article>
  );
};

export default BlogList;
