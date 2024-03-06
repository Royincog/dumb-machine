import React from "react";
import picone from "../assets/grid-picone.png";
import pictwo from "../assets/grid-pictwo.png";
import picthree from "../assets/grid-picthree.png";
import picfour from "../assets/grid-picfour.png";
import Button from "./Button";
import { useNavigate, Link } from "react-router-dom";
import { JackInTheBox, Bounce } from "react-awesome-reveal";

function AboutSection() {
  const navigate = useNavigate();
  return (
    <section className="flex justify-center items-center lg:min-h-96 min-[320px]:min-h-[512px]">
      <div className="mx-auto flex flex-col md:flex-row items-center justify-center px-6 lg:px-32 py-2">
        <div className="flex-grow flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-black">
            Hi, I am <Link to="/">Rajarshi Roy !!</Link>
          </h1>
          <p className="leading-relaxed font-medium">
            You see, life to me is like an all-you-can-eat buffet - <br />
            I'm always wondering why the desserts are at the end and why I can't
            start with them first. <br />
            It's a series of weird questions, endless curiosity, and a
            relentless pursuit of...well, more! <br />
            <br />
            I'm that person who looks at a mountain and doesn't just see a
            mountain; <br />I see a challenge, a story, and a potential broken
            limb.
            <br /> But hey, what's life without a few scars and tales to tell,
            right? <br />I make things, break things (mostly break things), and
            on a good day, <br />I manage to put some of them back together.
            <br /> I'm the kind of "dumb" person who believes that if you're not
            living on the edge,
            <br /> you're taking up too much space.
            <br />
            <br />
          </p>

          <div className="pt-2">
            {" "}
            <p className="mb-2 leading-relaxed font-semibold">
              What other people say about me !!{" "}
            </p>
            <Bounce cascade damping={0.7} fraction={0.8}>
              <Button
                text="dumb comments"
                onClick={() => {
                  navigate("/testimonial");
                }}
              />
            </Bounce>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Grid />
        </div>
      </div>
    </section>
  );
}
function Grid() {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-4 gap-4">
        <JackInTheBox cascade damping={0.7} fraction={0.7}>
          <div className="overflow-hidden rounded-lg">
            <img src={picone} alt="" className="w-full h-auto" />
          </div>
        </JackInTheBox>
        <JackInTheBox cascade damping={0.7} fraction={0.7}>
          <div className="overflow-hidden rounded-lg">
            <img src={pictwo} alt="" className="w-full h-auto" />
          </div>
        </JackInTheBox>
        <JackInTheBox cascade damping={0.7} fraction={0.7}>
          <div className="overflow-hidden rounded-lg">
            <img src={picthree} alt="" className="w-full h-auto" />
          </div>
        </JackInTheBox>
        <JackInTheBox cascade damping={0.7} fraction={0.7}>
          <div className="overflow-hidden rounded-lg">
            <img src={picfour} alt="" className="w-full h-auto" />
          </div>
        </JackInTheBox>
      </div>
    </div>
  );
}

export default AboutSection;
