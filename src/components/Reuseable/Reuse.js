import "./reuse.css";

export const ButtonComp = ({ text, btnStyles, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full h-10 bg-sky-500  flex justify-center items-center rounded-md text-white font-semibold ${btnStyles}`}
  >
    {text}
  </button>
);

export const Input = ({ placeholder, inputStyle, setValue, type }) => (
  <input
    className={`w-full h-11  bg-gray-200 rounded-md mb-3 px-3  focus:outline-none  focus:ring-1 focus:ring-sky-500 ${inputStyle}`}
    placeholder={placeholder}
    onChange={(val) => setValue(val.target.value)}
    type={type}
  />
);
