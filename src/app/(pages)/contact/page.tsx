"use client";
import { useState } from "react";

export default function Contact() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState("");

  const handleSubmit = () => {
    setTodo(input);
    setInput("");
  };
  const handleDone = () => {
    setTodo("");
  };

  return (
    <main>
      <div>
        <h1>Creating Todo</h1>
        <div className="flex mt-4 w-[50rem]">
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
            placeholder="Add Todo"
          ></input>
          <button
            className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal"
            onClick={handleSubmit}
          >
            Add
          </button>
        </div>
        <div className="p-10 flex">
          <div className=" bg-slate-200 rounded-md w-fit p-5">
            <h1>{todo}</h1>
          </div>
          <button
            onClick={handleDone}
            className=" bg-blue-700 text-white p-5 ml-3 rounded-md"
          >
            Done
          </button>
        </div>
      </div>
    </main>
  );
}
