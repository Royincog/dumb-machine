import "../App.css";
import { FilterProvider } from "../contexts/FilterProvider";
import AboutSection from "./AboutSection";
import BlogList from "./BlogList";
import CreditStack from "./CreditStack";
import RandomAvatar from "./RandomAvatar";
import ReactionTracker from "./ReactionTracker";
import { Fade, Bounce } from "react-awesome-reveal";
function IndexPage() {
  return (
    <>
      <div className="App overflow-x-hidden">
        <div className="font-Lora container mx-auto px-4 py-20">
          <div className="text-center mt-20">
            <div className="flex flex-col md:flex-row justify-center items-center md:items-start">
              <RandomAvatar />
              <Fade cascade damping={1.0}>
                <h1 className="text-6xl font-bold mb-6">
                  Giving Instruction <br /> To Dumb Machine.
                </h1>
              </Fade>
            </div>

            <p className="text-xl mb-6 font-medium leading-relaxed">
              The story is about me and my{" "}
              <span className="font-bold">"dumb"</span> experiences in tech !!
            </p>
            <Bounce cascade damping={0.2}>
              <ReactionTracker />
              <AboutSection />
            </Bounce>
            <Fade cascade damping={0.1}>
              <FilterProvider>
                <BlogList />
              </FilterProvider>
            </Fade>
          </div>
        </div>
      </div>

      <CreditStack />
    </>
  );
}

export default IndexPage;
