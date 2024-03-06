import React, { useEffect, useRef } from "react";
import { useUser } from "../contexts/UserProvider";
import { saveUserCommentsToFireBase } from "../firebaseconfig/auth/saveuserdata";
import { ToastContainer, toast } from "react-toastify";
import Button from "./Button";
import BlogReviewList from "./BlogReviewList";
import { Link } from "react-router-dom";

function BlogReview({ blogId }) {
  const { currentUser } = useUser();
  const inputCommentsRef = useRef(null);

  useEffect(() => {
    console.log("current user info ", currentUser);
  }, [currentUser]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const comments = {
      blogId,
      comment: inputCommentsRef.current.value,
    };
    if (true) {
      await saveUserCommentsToFireBase(currentUser, comments)
        .then(() => {
          toast.success("Thanks for the dumb review !! 🍪");
          console.log("Comments saved successfully.");
          //Cleaning up the form has been submitted and emitting a toast !!
          inputCommentsRef.current.value = "";
        })
        .catch((error) => {
          console.error("Failed to save testimonial:", error);
        });
    } else {
      toast.error("Try to put dumb words not gibberish 😒");
    }
  };

  return (
    <>
      {currentUser ? (
        <>
          <div className="relative w-full min-w-[200px]">
            <textarea
              className="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-black border-t-transparent bg-transparent px-3 py-2.5 text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-black focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-black"
              placeholder=" "
              ref={inputCommentsRef}
            ></textarea>
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Comments
            </label>
          </div>
          <Button text="Submit" onClick={handleSubmit} className="py-7" />
        </>
      ) : (
        <p className="pb-7 leading-loose">
          please{" "}
          <Link
            to="/testimonial"
            className="text-decoration-line: underline font-semibold leading-loose"
          >
            Sign In
          </Link>{" "}
          to comment
        </p>
      )}
      <BlogReviewList blogId={blogId} />
      <ToastContainer />
    </>
  );
}

export default BlogReview;
