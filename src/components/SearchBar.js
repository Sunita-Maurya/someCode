import React, { useState, useRef } from "react";

const SearchBar = () => {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  const inputref = useRef();
  let filteredItems = items.filter((item) =>
    item.toLowerCase().includes(query.toLocaleLowerCase())
  );
  const submitHandler = (e) => {
    e.preventDefault();
    let v = inputref.current.value;
    console.log(v);
    setItems((pre) => {
      return [...pre, v];
    });

    inputref.current.value = "";
  };

  return (
    <div className="p-10">
      <input
        type="search"
        placeholder="Search..."
        className="border border-white my-5 "
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="add items" ref={inputref} />
        <button type="submit">add</button>
      </form>
      {filteredItems.map((items) => (
        <div> {items}</div>
      ))}
    </div>
  );
};

export default SearchBar;
