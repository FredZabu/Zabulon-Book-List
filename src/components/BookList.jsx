/* eslint-disable react/prop-types */
import ShowBook from "./ShowBook";
import { useContext } from "react";
import BookContext from "../context/contextProvider";
function BookList() {
    const { books } = useContext(BookContext);
    const renderedBooks = books.map((book) => {
        return <ShowBook key={book.id} book = {book} />
    })
  return (
      <div className="book-list">{ renderedBooks }</div>
  )
}

export default BookList