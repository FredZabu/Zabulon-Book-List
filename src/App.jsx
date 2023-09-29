import { useState } from "react"
import CreateBook from "./components/CreateBook";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const handleCreateBook = (id, title) => {
    setBooks([...books, { id: id, title: title }]);
  
  }
  const handleDeleteBook = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    })

    setBooks(updatedBooks);
  }
  return (
    <div>
      <BookList books = {books} onDelete = {handleDeleteBook} />
      <CreateBook onCreate = {handleCreateBook} />
    </div>
  )
}

export default App