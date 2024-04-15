import React from "react";
import { useState } from "react";

const Body = ({ items, onDelete, onUpdate }) => {
  const [updatedIndex, setUpdatedIndex] = useState(null);
  const [updatedText, setUpdatedText] = useState("");

  const handleDelete = (index) => {
    onDelete(index);
  };

  const handleUpdate = (index) => {
    setUpdatedIndex(index);
    setUpdatedText(items[index]);
  };
  const handleChange = () => {
    onUpdate(updatedIndex, updatedText);
    setUpdatedIndex(null);
    setUpdatedText("");
  };

  return (
    <div className="body" style={{ border: `${!items?.length ? "none" : ""}` }}>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {updatedIndex === index ? (
              <>
                <input
                  type="text"
                  value={updatedText}
                  onChange={(e) => setUpdatedText(e.target.value)}
                />
                <button
                  className="change-btn btn btn-success"
                  onClick={handleChange}
                >
                  Change
                </button>
              </>
            ) : (
              <>
                {item}
                <button
                  className="delete  btn btn-danger"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
                <button
                  className="update btn btn-warning"
                  onClick={() => handleUpdate(index)}
                >
                  Update
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Body;
