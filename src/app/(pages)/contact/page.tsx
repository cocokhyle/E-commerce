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
        <h1 className=" font-bold text-[30px]">Creating Todo</h1>
        <div className="flex mt-4 ">
          <form action={handleSubmit} className="flex justify-between mb-5">
            <input
              name="input"
              className="shadow appearance-none border rounded w-[30rem] py-2 px-3 mr-4 text-grey-darker"
              placeholder="Add Todo"
            ></input>
            <button
              className=" p-2 border-2 rounded-lg bg-blue-700 w-20 text-white"
              type="submit"
            >
              Add
            </button>
          </form>
        </div>

        <div className="flex justify-between w-full">
          <ul className="overflow-y-scroll h-[45rem] bg-slate-100 rounded-lg p-10">
            {inputData.map((data, index) => (
              <li
                key={index}
                className=" bg-slate-300 rounded-md p-5 mt-3 flex justify-between "
              >
                {data}
                <button
                  onClick={() => removeData(index)}
                  className="p-3 bg-blue-700 text-white rounded ml-5 justify-end items-end"
                >
                  Done
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
