import React from "react";
import picone from "../assets/grid-picone.png";
import pictwo from "../assets/grid-pictwo.png";
import picthree from "../assets/grid-picthree.png";
import picfour from "../assets/grid-picfour.png";
function AboutSection() {
  return (
    <section class="flex justify-center items-center min-h-96">
      <div class="mx-auto flex flex-col md:flex-row items-center justify-center px-6 lg:px-32 py-2">
        <div class="flex-grow flex flex-col items-center md:items-start text-center md:text-left">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-semibold text-black">
            Hi, I am Roy !!
          </h1>
          <p class="mb-8 leading-relaxed font-medium">
            I am a happy to go lucky man, never been satisfied with
            <br />
            what I have, been wondering why life is like this and <br />
            some weired questions.I am a foodie,an adventurer and someone <br />
            who makes and break things,mostly I break, and I also instruct my{" "}
            <br />
            Dumb Machine !!
          </p>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Grid />
        </div>
      </div>
    </section>
  );
}
function Grid() {
  return (
    <div class="container mx-auto p-4">
      <div class="grid grid-cols-4 gap-4">
        <div class="overflow-hidden rounded-lg">
          <img src={picone} alt="Gallery Image 1" class="w-full h-auto" />
        </div>

        <div class="overflow-hidden rounded-lg">
          <img src={pictwo} alt="Gallery Image 2" class="w-full h-auto" />
        </div>

        <div class="overflow-hidden rounded-lg">
          <img src={picthree} alt="Gallery Image 3" class="w-full h-auto" />
        </div>

        <div class="overflow-hidden rounded-lg">
          <img src={picfour} alt="Gallery Image 4" class="w-full h-auto" />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
