import { useState } from "react";
import React from "react";
import Body from "./Body";

const InputField = () => {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  const [clicked, setClicked] = useState(false);
  const handleInputs = () => {
    if (!inputText.trim()) {
      //   console.error("empty list");
      return;
    } else {
      setItems([...items, inputText]);
      setInputText("");
    }
  };
  const handleDelete = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const handleUpdate = (index, newText) => {
    const newItems = [...items];
    newItems[index] = newText;
    setItems(newItems);
  };

  return (
    <div className="inputcontainer ">


      <input
        type="text"
        className="search-box"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      ></input>
      <button
        className="btn btn-primary"
        onClick={(e) => {
          e.preventDefault();
          handleInputs();
          setClicked(true);
        }}
      >
        Add
      </button>

        
      {/* {clicked && ( */}
        <Body items={items} onDelete={handleDelete} onUpdate={handleUpdate} />
      {/* )} */}
    </div>
  );
};

//      {clicked && <Body items={items} this is conditional rendering

export default InputField;
