import React, { useState } from "react";

function Home() {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);
  const [isSorted, setIsSorted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setList([...list, inputValue]);
      setInputValue("");
    }
  };

  const handleSort = () => {
    const sortedList = [...list].sort((a, b) => a.localeCompare(b));
    setList(isSorted ? sortedList.reverse() : sortedList);
    setIsSorted(!isSorted);
  };

  return (
    <div className="max-w-md mx-auto bg-blue-50 shadow-md rounded p-4">
      <h1 className="text-2xl font-bold mb-4">Sortable List</h1>
      <form
        onSubmit={handleSubmit}
        className="mb-4 flex item-center justify-center gap-3"
      >
        <input
          type="text"
          className="border p-2 w-full"
          placeholder="Please input an item"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className="bg-blue-500 text-white p-2 w-fit">
          Add
        </button>
      </form>
      <hr class="my-4 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
      {list.length > 0 && (
        <button
          className="bg-green-500 text-white p-2 w-full mb-4"
          onClick={handleSort}
        >
          Sort {isSorted ? "Descending" : "Ascending"}
        </button>
      )}
      <ul role="list" className="gap-2 flex flex-col">
        {list.length === 0 ? (
          <div className="py-10 flex flex-col w-full h-full items-center text-center">
            <span className="text-gray-900 text-lg font-semibold">
              No items here - yet 👀
            </span>
            <p className="max-w-md text-gray-500">
              There are no items at the moment.
            </p>
          </div>
        ) : (
          <>
            {list.map((item, index) => (
              <li
                key={index}
                className="flex justify-between gap-x-6 py-5 bg-white shadow-md rounded px-3"
              >
                <div className="flex min-w-0 gap-x-4">
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">
                      {item}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </>
        )}
      </ul>
    </div>
  );
}

export default Home;
