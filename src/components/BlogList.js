import React, { useContext } from "react";
import useSWR from "swr";
import getBlogs from "../firebaseconfig/blogs/firebasegetblogutil";
import { useNavigate } from "react-router-dom";
import Showdown from "showdown";
import LoadingDots from "./LoadingDots";
import { Markup } from "interweave";
import Dropdown from "./Dropdown";
import { FilterContext } from "../contexts/FilterProvider";
import { Bounce } from "react-awesome-reveal";

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

function BlogList() {
  const { filterCategory } = useContext(FilterContext);
  const { data: blogs, error } = useSWR("blogs", getBlogs);

  // Filter blogs based on the selected category if there is one
  const filteredBlogs = blogs?.filter((blog) =>
    filterCategory ? blog.category === filterCategory : true
  );

  if (error) return <div className="text-red-700">Failed to load</div>;
  if (!blogs) return <LoadingDots />;
  return (
    <>
      <h1 className="font-bold text-5xl">Dumb Blog Section 🍪</h1>
      <h4 className="pt-6 leading-relaxed font-semibold">
        Select your "dumb" category
      </h4>
      <div className="container mx-auto px-4 py-10">
        <Dropdown />{" "}
        <div className="flex flex-wrap justify-center gap-4 lg:gap-4">
          {filteredBlogs.map((blog, index) => (
            <Bounce cascade damping={0.9}>
              <Card key={index} data={blog} converter={converter} />
            </Bounce>
          ))}
        </div>
      </div>
    </>
  );
}

const Card = ({ data }) => {
  const navigate = useNavigate();
  const handleClick = () => navigate(`/${data.id}`);

  return (
    <article
      className="bg-white flex flex-col max-w-xs overflow-hidden rounded-lg shadow py-4"
      onClick={handleClick}
    >
      <img src={data.thumbnail_image} alt={data.heading} />
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
