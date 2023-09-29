/* eslint-disable react/prop-types */
import ShowBook from "./ShowBook"
function BookList({ books, onDelete , onEdit}) {
    const renderedBooks = books.map((book) => {
        return <ShowBook key={book.id} book = {book} onDelete = {onDelete} onEdit ={onEdit} />
    })
  return (
      <div className="book-list">{ renderedBooks }</div>
  )
}

export default BookList