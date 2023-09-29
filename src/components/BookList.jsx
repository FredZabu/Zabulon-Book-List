/* eslint-disable react/prop-types */
import ShowBook from "./ShowBook"
function BookList({ books, onDelete }) {
    const renderedBooks = books.map((book) => {
        return <ShowBook key={book.id} book = {book} onDelete = {onDelete} />
    })
  return (
      <div className="book-list">{ renderedBooks }</div>
  )
}

export default BookList