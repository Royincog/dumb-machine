import React from "react";
import AuthFormAction from "./AuthFormAction";
import TestimonialList from "./TestimonialList";
import { useRealtimeCollection } from "../firebaseconfig/firedbutil";

function Testimonial() {
  const { data: users } = useRealtimeCollection("users");

  return (
    <div className="font-Lora container mx-auto px-4 py-20">
      <div className="text-center mt-20">
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start">
          <h1 className="text-6xl font-bold mb-6">
            Write a short line <br />
            about me.
          </h1>
        </div>
        <AuthFormAction />
        {users.length > 0 ? <TestimonialList /> : null}
      </div>
    </div>
  );
}

export default Testimonial;
