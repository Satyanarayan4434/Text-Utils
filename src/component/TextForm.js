import React, { useState } from "react";

export default function TextForm(props) {
  const [textAreaValue, settextAreaValue] = useState("Type Your Text...");

  let changeHandler = (e) => {
    settextAreaValue(e.target.value);
  };
  let clickHandler = () => {
    let newText = textAreaValue.toLocaleUpperCase();
    settextAreaValue(newText);
  };
  let clearHandler = () => {
    let clearText = "";
    settextAreaValue(clearText);
  };
  let copyHandler = ()=>{
    let newText = textAreaValue;
    
    if (newText !== "") {
        alert("Text Copied!");
        navigator.clipboard.writeText(newText);
    }
    else{
        alert("Input Field is Empty");
    }
  };
  return (
    <>
      <div className="flex flex-col items-center mt-10 gap-6   ">
        <h1 className="font-extrabold text-2xl font-mono">{props.heading}</h1>
        <textarea
          rows="8"
          cols="100"
          className="border border-red-400 rounded-lg bg-slate-100 p-6 font-mono text-xl "
          onChange={changeHandler}
          value={textAreaValue}
        ></textarea>
        <div className="flex gap-4">
          <button
            onClick={clickHandler}
            className="text-white font-mono w-[15rem] h-[3rem] bg-lime-600 rounded-lg shadow-md shadow-black hover:shadow-lg hover:shadow-black"
          >
            Convert it to Uppuer Case
          </button>
          <button
            onClick={clearHandler}
            className="text-white font-mono w-[8rem] h-[3rem] bg-blue-600 rounded-lg shadow-md shadow-black hover:shadow-lg hover:shadow-black"
          >
            Clear Text
          </button>
          <button
            onClick={copyHandler}
            className="text-white font-mono w-[8rem] h-[3rem] bg-blue-600 rounded-lg shadow-md shadow-black hover:shadow-lg hover:shadow-black"
          >
            Copy Text
          </button>
        </div>
        <div className="flex w-[1080px] justify-between mt-5">
        <div className="flex flex-col items-start border border-black p-6 rounded-md bg-slate-100">
          <p className="text-2xl font-bold">Your Text Summary</p>
          <p className="text-xl">
            <span className="text-2xl font-mono font-extrabold">{textAreaValue.length}</span> Characters and{" "}
            <span className="text-2xl font-mono font-extrabold">{textAreaValue.split(" ").length}</span> No Of Characters
          </p>
          <p>It takes <span  className="text-2xl font-mono font-extrabold">{0.008 * textAreaValue.split(" ").length}</span> minutes to read</p>
        </div>
        <div className="flex flex-col w-[25rem] items-start border border-black p-6 rounded-md bg-slate-100">
          <p className="text-2xl font-bold">Text Preview</p>
          <p className="max-w-[20rem] overflow-hidden">{textAreaValue}</p>
        </div>
        </div>
      </div>
    </>
  );
}
