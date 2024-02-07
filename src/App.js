import "./App.css";
import RandomAvatar from "./components/RandomAvatar";

function Button() {
  return (
    <a href="#_" className="relative inline-block text-lg group">
      <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-black transition-colors duration-300 ease-out border-2 border-black rounded-lg group-hover:text-white">
        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-white"></span>
        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-black group-hover:-rotate-180 ease"></span>
        <span className="relative">Hello World</span>
      </span>
      <span
        className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-black rounded-lg group-hover:mb-0 group-hover:mr-0"
        data-rounded="rounded-lg"
      ></span>
    </a>
  );
}

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
            ☕
          </p>
          <Button />
        </div>
      </div>
    </div>
  );
}

export default App;
