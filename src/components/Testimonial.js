import React from "react";
import Button from "./Button";
import { signInWithGooglePopUp } from "../firebaseconfig/auth/authconfig";

function Testimonial() {
  const loginUser = async () => {
    try {
      const response = await signInWithGooglePopUp();
      console.log("response is from auth ", response);
    } catch (error) {
      console.log("the error", error);
    }
  };

  return (
    <div className="font-Lora container mx-auto px-4 py-20">
      <div className="text-center mt-20">
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start">
          <h1 className="text-6xl font-bold mb-6">
            What Dumb thing you <br />
            think about me.
          </h1>
        </div>
      </div>
      <Button text="Sign In" onClick={loginUser} />
    </div>
  );
}

export default Testimonial;
