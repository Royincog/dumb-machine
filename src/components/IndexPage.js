import "../App.css";
import AboutSection from "./AboutSection";
import BlogList from "./BlogList";
import CreditStack from "./CreditStack";
import RandomAvatar from "./RandomAvatar";
import ReactionTracker from "./ReactionTracker";

function IndexPage() {
  return (
    <>
      <div className="App overflow-x-hidden">
        <div className="font-Lora container mx-auto px-4 py-20">
          <div className="text-center mt-20">
            <div className="flex flex-col md:flex-row justify-center items-center md:items-start">
              <RandomAvatar />
              <h1 className="text-6xl font-bold mb-6">
                Giving Instruction <br /> To Dumb Machine.
              </h1>
            </div>
            <p className="text-xl mb-6 font-normal">
              The story is about me and my{" "}
              <span className="font-semibold">"dumb"</span> experiences in tech
              !!
            </p>
            <ReactionTracker />
            <AboutSection />
            <BlogList />
          </div>
        </div>
      </div>
      <CreditStack />
    </>
  );
}

export default IndexPage;
