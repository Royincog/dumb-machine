import React, { useRef } from "react";
import { useUser } from "../contexts/UserProvider";
import { saveUserTestimonialToFireBase } from "../firebaseconfig/auth/saveuserdata";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emojiRegex from "emoji-regex";

import Button from "./Button";
const Form = () => {
  const regex = emojiRegex();
  const regexPtt = /^[\p{L}\p{N}]+( +[\p{L}\p{N}]+)*$/u;
  const { currentUser } = useUser();
  const inputRef = useRef(null);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!currentUser) {
      toast.error("User is not logged in.");
      console.error("User is not logged in.");
      return;
    }
    const testimonial = inputRef.current.value;
    if (regexPtt.test(testimonial) || regex.test(testimonial)) {
      await saveUserTestimonialToFireBase(currentUser, testimonial)
        .then(() => {
          toast.success("Thanks for the dumb comment !! 🦩");
          console.log("Testimonial saved successfully.");
          //Cleaning up the form has been submitted and emitting a toast !!
          inputRef.current.value = "";
          const parentDiv = inputRef.current.parentNode;
          parentDiv.style.display = "none";
        })
        .catch((error) => {
          console.error("Failed to save testimonial:", error);
        });
    } else {
      toast.error("Try to put dumb words not gibberish 😒");
    }
  };

  return (
    <React.Fragment>
      {" "}
      <div className="inputForm py-6">
        {" "}
        <input
          ref={inputRef}
          placeholder="🦄 say dumb things !!"
          className="bg-white appearance-none border-2 border-gray-200 rounded py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black mr-4 min-[320px]:mb-5"
          id="inline-full-name"
          type="text"
        />
        <Button text="Submit" onClick={handleSubmit} className="py-7" />
      </div>
      <ToastContainer />
    </React.Fragment>
  );
};

export default Form;
