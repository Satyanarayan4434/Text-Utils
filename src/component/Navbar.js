import React from "react";

export default function Navbar(props) {
  return (
    <div>
      <div
        className={`w-full h-[4rem] bg-${
          props.screenMode
        } flex justify-between items-center p-6 overflow-hidden text-${
          props.screenMode === "white" ? "black" : "white"
        }`}
      >
        <h1 className="font-mono font-extrabold text-3xl">{props.heading}</h1>
        <div className={`${props.screenMode === "white" ? "hidden" : "flex"} gap-6`}>
           <h1 className="font-mono font-bold text-lg">Select Color :</h1>
          <div className="h-6 w-6 bg-red-600 border border-gray-100 cursor-pointer" onClick={props.redColorHandler}></div>
          <div className="h-6 w-6 bg-blue-600 border border-gray-100 cursor-pointer" onClick={props.blueColorHandler}></div>
          <div className="h-6 w-6 bg-violet-800 border border-gray-100 cursor-pointer" onClick={props.violetColorHandler}></div>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            onClick={props.toggleMode}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span
            className={`ml-3 text-sm font-medium text-${
              props.screenMode === "white" ? "black" : "white"
            }`}
          >
            Enable {props.screenMode === "white" ? "Dark" : "Light"} Mode
          </span>
        </label>
      </div>
    </div>
  );
}
