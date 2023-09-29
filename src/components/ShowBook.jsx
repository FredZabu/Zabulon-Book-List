/* eslint-disable react/prop-types */
import EditBook from "./EditBook";
import DeleteBook from "./DeleteBook";
import '../App.css';
function ShowBook({book, onDelete}) {
  return (
      <div className="book">
          <div className="actionBtn">
              <EditBook />
              <DeleteBook onDelete = {onDelete} id = {book.id} />
          </div>
          <h3>Title : {book.title}</h3>
          <p>Book ID : { book.id}</p>
    </div>
  )
}

export default ShowBook