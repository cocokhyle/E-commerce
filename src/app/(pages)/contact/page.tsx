"use client";
import { useState } from "react";

export default function Contact() {
  const [input, setInput] = useState("");
  const [inputData, setInputData] = useState<string[]>([]);

  const handleSubmit = (formData: FormData) => {
    const newData = formData.get("input") as string;

    setInputData((prevInputData) => [...prevInputData, newData]);
    setInput("");
  };

  const removeData = (index: number) => {
    setInputData((prevInputData) =>
      prevInputData.filter((_, i) => i !== index)
    );
  };

  return (
    <main>
      <div>
        <h1>Creating Todo</h1>
        <div className="flex mt-4 w-[50rem]">
          <form action={handleSubmit}>
            <input
              name="input"
              className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
              placeholder="Add Todo"
            ></input>
            <button className=" p-2 border-2 rounded " type="submit">
              Add
            </button>
          </form>
        </div>
        <ul>
          {inputData.map((data, index) => (
            <li key={index} className=" bg-slate-200 p-5 mt-3 flex">
              {data}
              <button
                onClick={() => removeData(index)}
                className="p-3 bg-blue-700 text-white rounded ml-5"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
