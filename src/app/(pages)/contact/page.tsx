export default function Contact() {
  return (
    <main>
      <div>
        <h1>Creating Todo</h1>
        <div className="flex mt-4 w-[50rem]">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
            placeholder="Add Todo"
          ></input>
          <button className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal">
            Add
          </button>
        </div>
      </div>
    </main>
  );
}
