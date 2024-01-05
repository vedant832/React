
import React, { useState } from "react";

function App() {
  const [backgroundColor, setBackgroundColor] = useState("bg-black");

  const handleButtonClick = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div className={`bg-black absolute ${backgroundColor} h-screen w-screen`}>
      <div className="flex items-end justify-start h-screen">
        <div className="flex flex-col items-center mt-auto">
          <button
            onClick={() => handleButtonClick("bg-green-600")}
            className="button  bg-purple-900 rounded-full text-white m-5 p-5 w-40 border-black font-comic"
          >
            green
          </button>
          <button
            onClick={() => handleButtonClick("bg-red-700")}
            className="button  bg-purple-900 rounded-full text-white m-5 p-5 w-40 border-black font-comic"
          >
            red
          </button>
          <button
            onClick={() => handleButtonClick("bg-blue-600")}
            className="button rounded-6xl bg-purple-900 rounded-full text-white m-5 p-5  w-40 border-black font-comic align-baseline self-center mr-5"
          >
            blue 
          </button>
        </div> 
      </div>
    </div>
  );
}

export default App;

