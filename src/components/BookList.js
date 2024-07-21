import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks, deleteBook } from "../redux/bookSlice";
const BookList = () => {
  const books = useSelector((state) => state.books);
  // console.log(books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
    console.log("aa");
  }, [dispatch]);
  return (
    <div>
      <h3>Books</h3>
      {books && books.length > 0 ? (
        <ul>
          {books.map((book, i) => {
            console.log(book, i);
            return (
              <li key={`${i}-${book.id}`}>
                {book.title} - {book.description}
                <button onClick={() => dispatch(deleteBook({ id: book.id }))}>
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};

export default BookList;
