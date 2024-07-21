import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/bookSlice";

const Addbook = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({ title, description }));
    setDescription("");
    setTitle("");
  };
  return (
    <div>
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          placeholder="Title"
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={description}
          placeholder="Description"
          required
          onChange={(e) => setDescription(e.target.value)}
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default Addbook;
