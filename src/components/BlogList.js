import React, { useEffect, useState } from "react";
import getBlogs from "../firebaseconfig/blogs/firebasegetblogutil";
import { useNavigate } from "react-router-dom";
function BlogList() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const blogsData = getBlogs();
    blogsData.then((data) => {
      setBlogs(data);
    });
  }, []);
  return (
    <>
      {blogs.map((blog) => {
        return <Card data={blog} />;
      })}
    </>
  );
}
const Card = ({ data }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/blog/${data.heading}`);
  };
  return (
    <article className="bg-white flex flex-col max-w-xs mx-auto overflow-hidden rounded-lg shadow">
      <img src={data.thumbnail_image} alt="" onClick={handleClick} />
      <div className="px-4 py-6">
        <h2 className="font-bold text-2xl">{data.heading}</h2>
        <div className="py-2">
          <pre className="overflow-hidden overflow-ellipsis whitespace-nowrap">
            {data.description}
          </pre>
        </div>
      </div>
    </article>
  );
};

export default BlogList;
