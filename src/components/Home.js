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
      <div className="max-w-md mx-auto bg-white shadow-md rounded p-4">
        <h1 className="text-2xl font-bold mb-4">Todo List</h1>
        <form onSubmit={handleSubmit} className="mb-4">
          <input
              type="text"
              className="border p-2 w-full mb-2"
              placeholder="Add an item"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit" className="bg-blue-500 text-white p-2 w-full">
            Add Item
          </button>
        </form>
        <button
            className="bg-green-500 text-white p-2 w-full mb-4"
            onClick={handleSort}
        >
          Sort {isSorted ? "Descending" : "Ascending"}
        </button>
        <ul className="list-disc pl-5">
          {list.map((item, index) => (
              <li key={index} className="mb-2">
                {item}
              </li>
          ))}
        </ul>
      </div>
  );
}

export default Home;
