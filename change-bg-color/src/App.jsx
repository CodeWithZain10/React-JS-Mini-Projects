import { useState } from "react";
import "./App.css";

function App() {
  const [inputVal, setInputVal] = useState("");
  const [changeBg, setChangeBg] = useState("white");

  const handleChangeBg = () => {
    setChangeBg(inputVal);
    setInputVal("");
  };

  const handleForm = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div
        className="flex  justify-center items-center w-[100%] h-[400px]"
        style={{ background: changeBg }}
      >
        <form action="" onSubmit={handleForm}>
          <input
            onChange={(e) => {
              setInputVal(e.target.value);
            }}
            type="text"
            value={inputVal}
            className="border border-black mx-4 p-2 rounded-lg outline-none w-52"
          />
          <button
            onClick={handleChangeBg}
            className="bg-slate-600 p-2 text-white font-bold rounded-lg"
          >
            Change Color
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
