import React, { useMemo } from "react";
import AuthFormAction from "./AuthFormAction";
import TestimonialList from "./TestimonialList";
import { useRealtimeCollection } from "../firebaseconfig/firedbutil";
import testimonial from "../assets/testimonial.png";

import { Bounce } from "react-awesome-reveal";

function Testimonial() {
  const { data: users } = useRealtimeCollection("users");

  const isTestimonialPresent = useMemo(() => {
    return users.some((user) => user.testimonial);
  }, [users]);

  return (
    <div className="font-Lora container mx-auto px-4 py-20">
      <div className="text-center mt-20">
        <Bounce>
          {" "}
          <img
            src={testimonial}
            className="h-[19rem] w-[20rem] object-contain mx-auto"
            alt="testimonial beer pic"
          />
        </Bounce>

        <div className="flex flex-col md:flex-row justify-center items-center md:items-start">
          <h1 className="text-6xl font-bold mb-6">
            Write a short line <br />
            about me.
          </h1>
        </div>
        <AuthFormAction />
        <p className="pt-10 leading-relaxed text-pretty font-bold text-xl">
          What other "dumb" people say about me 🌈{" "}
        </p>
        {users.length > 0 && isTestimonialPresent ? (
          <TestimonialList />
        ) : (
          <p className="py-7">No one said anything 🚗</p>
        )}
      </div>
    </div>
  );
}

export default Testimonial;
