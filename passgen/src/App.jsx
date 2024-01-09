// import React, { useState } from "react";
// var pass="";
// var includeSymbols = false;
// var includeNumbers = false;
// str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
// sym="!@#$%^&*()_+";
// num="0123456789";
// length;



// function genPassword(length, includeSymbols, includeNumbers) {
//   if (includeSymbols && includeNumbers) {
//     for (var i = 0; i < length; i++) {
//       pass += str.charAt(Math.floor(Math.random() * str.length));
//       pass += sym.charAt(Math.floor(Math.random() * sym.length));
//       pass += num.charAt(Math.floor(Math.random() * num.length));
//     }
//   } else if (includeSymbols) {
//     // Placeholder statement
//     for (var i = 0; i < length; i++) {
//       pass += str.charAt(Math.floor(Math.random() * str.length));
//       pass += sym.charAt(Math.floor(Math.random() * sym.length));
//     }
//   }
//   else  {
//     // Placeholder statement
//     for (var i = 0; i < length; i++) {
//       pass += str.charAt(Math.floor(Math.random() * str.length));
//       pass += num.charAt(Math.floor(Math.random() * num.length));
//     }
//   }
  
//   return pass;
// }

// function App() {
//   const [password, setPassword] = useState("");
//   const [length, setLength] = useState(8); // Default length

//   const handleGenerateClick = () => {
//     const newPassword = genPassword(length,includeSymbols,includeNumbers);
//     setPassword(newPassword);
//   };

//   const handleCopyClick = () => {
//     // Implement copy to clipboard logic here
//     // You can use document.execCommand('copy') or other methods
//   };

//   const handleSliderChange = (event) => {
//     setLength(Number(event.target.value));
//   };

//   return (
//     <div className="bg-blue-700 w-full h-screen absolute">
//       {/* Header */}
//       <h1 className="text-white flex justify-center font-semibold text-4xl mt-12">
//         Password Generator
//       </h1>
      
//       {/* Input */}
//       <div className="flex flex-col items-center mt-12">
//         <input
//           className="w-3/6 h-16 rounded-md mx-auto justify-center flex font-semibold text-2xl text-center mb-4"
//           type="text"
//           value={password}
//           placeholder="Here is your password"
//           readOnly
//         />
        
//         {/* Buttons */}
//         <div className="flex justify-around mx-11">
//           <button
//             className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded mr-5"
//             onClick={handleGenerateClick}
//           >
//             Generate
//           </button>
//           <button
//             className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded justify-between"
//             onClick={handleCopyClick}
//           >
//             Copy
//           </button>
//         </div>
        
//         {/* Slider */}
//         <div className="flex justify-center items-center mt-12">
//           <p className="text-white text-1xl font-semibold ml-4 mr-6 mb-4">
//             Length: {length}
//           </p>
//           <input
//             className="w-3/7 h-16 rounded-md mx-auto justify-center flex font-semibold text-2xl text-center mb-4"
//             type="range"
//             min="0"
//             max="128"
//             value={length}
//             onChange={handleSliderChange}
//           />

//         </div>
          
//         {/* Checkboxes */}
//         <div className="flex justify-center items-center mt-12">
//           <label className="text-white text-1xl font-semibold ml-4 mr-6 mb-4">
//             Include Symbols
//           </label>
//           <input
//             className="w-3/7 h-16 rounded-md mx-auto justify-center flex font-semibold text-2xl text-center mb-4"
//             type="checkbox"
//             value={includeSymbols}
//             onChange={handleSliderChange}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";

var pass = "";
var includeSymbols = false;
var includeNumbers = false;
var str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sym = "!@#$%^&*()_+";
var num = "0123456789";

function genPassword(length, includeSymbols, includeNumbers) {
  pass = ""; // Reset the password variable
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
  } else {
    for (var i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length));
      pass += num.charAt(Math.floor(Math.random() * num.length));
    }
  }

  return pass;
}

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false); // New checkbox state

  const handleGenerateClick = () => {
    const newPassword = genPassword(length, includeSymbols, includeNumbers); // Updated function call
    setPassword(newPassword);
  };

  const handleCopyClick = () => {
    // Implement copy to clipboard logic here
    // You can use document.execCommand('copy') or other methods
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
