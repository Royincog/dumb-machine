import React from "react";
import picone from "../assets/grid-picone.png";
import pictwo from "../assets/grid-pictwo.png";
import picthree from "../assets/grid-picthree.png";
import picfour from "../assets/grid-picfour.png";
function AboutSection() {
  return (
    <section className="flex justify-center items-center lg:min-h-96 min-[320px]:min-h-[512px]">
      <div className="mx-auto flex flex-col md:flex-row items-center justify-center px-6 lg:px-32 py-2">
        <div className="flex-grow flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-black">
            Hi, I am Roy !!
          </h1>
          <p className="mb-8 leading-relaxed font-medium">
            I am a happy to go lucky man, never been satisfied with
            <br />
            what I have, been wondering why life is like this and <br />
            some weired questions.I am a foodie,an adventurer and someone <br />
            who makes and break things,mostly I break, and I also instruct my{" "}
            <br />
            Dumb Machine !!
          </p>
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
        <div className="overflow-hidden rounded-lg">
          <img src={picone} alt="" className="w-full h-auto" />
        </div>

        <div className="overflow-hidden rounded-lg">
          <img src={pictwo} alt="" className="w-full h-auto" />
        </div>

        <div className="overflow-hidden rounded-lg">
          <img src={picthree} alt="" className="w-full h-auto" />
        </div>

        <div className="overflow-hidden rounded-lg">
          <img src={picfour} alt="" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;