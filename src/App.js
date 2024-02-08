import "./App.css";
import AboutSection from "./components/AboutSection";
import RandomAvatar from "./components/RandomAvatar";
import ReactionTracker from "./components/ReactionTracker";

function App() {
  return (
    <div className="App">
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
            <span className="font-semibold">"dumb"</span> experiences in tech !!
          </p>
          <ReactionTracker />
          <AboutSection />
        </div>
      </div>
    </div>
  );
}

export default App;
