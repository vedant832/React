import React, { useState } from "react";

var pass = "";
var includeSymbols = false;
var includeNumbers = false;
var str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sym = "!@#$%^&*()_+";
var num = "0123456789";

function genPassword(length, includeSymbols, includeNumbers) {
  pass = ""; // Reset the password variable
  if (length < 8) {
    alert("Password length must be greater than 8 characters");
    return;
  }
  if (includeSymbols && includeNumbers) {


    for (var i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length));
      pass += sym.charAt(Math.floor(Math.random() * sym.length));
      pass += num.charAt(Math.floor(Math.random() * num.length));
    }
  } else if (includeSymbols) {
    for (var i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length));
      pass += sym.charAt(Math.floor(Math.random() * sym.length));
    }

   } else if (includeNumbers) {
    for (var i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length));
      pass += num.charAt(Math.floor(Math.random() * num.length));
    }
   }
   else {
    for (var i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length));
    }
  }

  return pass;
}

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false); 

  const handleGenerateClick = () => {
    const newPassword = genPassword(length, includeSymbols, includeNumbers); // Updated function call
    setPassword(newPassword);
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(password);
    
  };

  const handleSliderChange = (event) => {
    setLength(Number(event.target.value));
  };

  const handleCheckboxChange = () => {
    setIncludeSymbols(!includeSymbols);
  };

  const handleNumberCheckboxChange = () => {
    setIncludeNumbers(!includeNumbers); // New checkbox handler
  };

  return (
    <div className="bg-blue-700 w-full h-screen absolute">
      {/* Header */}
      <h1 className="text-white flex justify-center font-semibold text-4xl mt-12">
        Password Generator
      </h1>

      {/* Input */}
      <div className="flex flex-col items-center mt-12">
        <input
          className="w-3/6 h-16 rounded-md mx-auto justify-center flex font-semibold text-2xl text-center mb-4"
          type="text"
          value={password}
          placeholder="Here is your password"
          readOnly
        />

        {/* Buttons */}
        <div className="flex justify-around mx-11">
          <button
            className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded mr-5"
            onClick={handleGenerateClick}
          >
            Generate
          </button>
          <button
            className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded justify-between"
            onClick={handleCopyClick}
          >
            Copy
          </button>
        </div>

        {/* Slider */}
        <div className="flex justify-center items-center mt-12">
          <p className="text-white text-1xl font-semibold ml-4 mr-6 mb-4">
            Length: {length}
          </p>
          <input
            className="w-3/7 h-16 rounded-md mx-auto justify-center flex font-semibold text-2xl text-center mb-4"
            type="range"
            min="0"
            max="128"
            value={length}
            onChange={handleSliderChange}
          />
        </div>

        {/* Checkboxes */}
        <div className="flex justify-center items-center mt-12">
          <label className="text-white text-1xl font-semibold ml-4 mr-6 mb-4">
            Include Symbols
          </label>
          <input
            className="w-3/7 h-16 rounded-md mx-auto justify-center flex font-semibold text-2xl text-center mb-4"
            type="checkbox"
            checked={includeSymbols}
            onChange={handleCheckboxChange}
          />
        </div>

        {/* New Checkbox */}
        <div className="flex justify-center items-center mt-12 flex-row">
          <label className="text-white text-1xl font-semibold ml-4 mr-6 mb-4">
            Include Numbers
          </label>
          <input
            className="w-3/7 h-16 rounded-md mx-auto justify-center flex font-semibold text-2xl text-center mb-4"
            type="checkbox"
            checked={includeNumbers}
            onChange={handleNumberCheckboxChange}
          />
          
        </div>
      </div>
    </div>
  );
}

export default App;