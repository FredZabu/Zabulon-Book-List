import { useEffect, useState } from "react"
import axios from "axios";
import CreateBook from "./components/CreateBook";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);
  const handleEffect = async () => {
    const response = await axios.get("http://localhost:3001/Books");
   setBooks(response.data)
  }
  useEffect(() => {
    handleEffect();
  },[])

  const handleCreateBook = async (id, title) => {
    const response = await axios.post("http://localhost:3001/Books", { title })
    
    setBooks([...books,response.data]);
  
  }
  const handleDeleteBook =async (id) => {
    await axios.delete("http://localhost:3001/Books/"+id)
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    })

    setBooks(updatedBooks);
  }
  const handleEditBook = async (id, title) => {
    await axios.put("http://localhost:3001/Books/"+id, {title})
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return {...book, title}
      }
      return book;
    })

    setBooks(updatedBooks);
  }
  return (
    <div>
      <div className="logo">
        <h1>Z</h1>
        <p>Book List</p>
      </div>
      <BookList books = {books} onDelete = {handleDeleteBook} onEdit = {handleEditBook} />
      <CreateBook onCreate = {handleCreateBook} />
    </div>
  )
}

export default App