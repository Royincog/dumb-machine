export default function Button({ onClick, disabled, text }) {
  return (
    <button
      onClick={onClick}
      href="#_"
      className="relative inline-block text-lg group"
      disabled={disabled}
    >
      <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-black  border-2 border-black rounded-lg">
        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-white"></span>
        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-black ease"></span>
        <span className="relative">{text}</span>
      </span>
      <span
        className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-black rounded-lg group-hover:mb-0 group-hover:mr-0"
        data-rounded="rounded-lg"
      ></span>
    </button>
  );
}
