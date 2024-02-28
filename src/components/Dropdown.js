import React, { useContext, useMemo } from "react";
import useSWR from "swr";
import { FilterContext } from "../contexts/FilterProvider";
import getBlogs from "../firebaseconfig/blogs/firebasegetblogutil";
import LoadingDots from "./LoadingDots";
import Select from "react-select";

// Fetcher function for useSWR
const fetcher = async (...args) => {
  const response = await getBlogs(...args);
  return response;
};
const capitalizeFirstWord = (str) => str.charAt(0).toUpperCase() + str.slice(1);

function Dropdown() {
  const { setFilterCategory } = useContext(FilterContext);
  const { data: blogs } = useSWR("/blogs", fetcher);

  // useMemo to extract and deduplicate categories from blogs
  const categories = useMemo(() => {
    if (!blogs) return [{ value: "", label: "All" }];

    const uniqueCategories = new Set(blogs.map((blog) => blog?.category));

    const categoryObjects = Array.from(uniqueCategories).map((category) => ({
      value: category,
      label: capitalizeFirstWord(category),
    }));

    return [...categoryObjects, { value: "", label: "All" }];
  }, [blogs]);

  const handleSelect = (event) => {
    setFilterCategory(event?.value);
  };

  if (!blogs) return <LoadingDots />;

  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:items-start pb-7">
      <Select
        options={categories}
        onChange={handleSelect}
        defaultValue={categories[categories.length - 1]}
        theme={(theme) => ({
          ...theme,
          borderRadius: 1,
          colors: {
            ...theme.colors,
            primary25: "hotpink",
            primary: "black",
          },
        })}
      />
    </div>
  );
}

export default Dropdown;
