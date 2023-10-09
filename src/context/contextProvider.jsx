/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import axios from "axios";


const BookContext = createContext();
function Provider({ children }) {
    const [books, setBooks] = useState([]);

    const handleEffect = async () => {
    const response = await axios.get("http://localhost:3001/Books");
   setBooks(response.data)
  }

    const handleCreateBook = async (title) => {
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

    const valueToShare = {
        books,
        setBooks,
        handleCreateBook,
        handleDeleteBook,
        handleEditBook,
        handleEffect
    }
    

    return < BookContext.Provider value = {valueToShare}>
        {children}
    
    </BookContext.Provider >
}

export { Provider };
export default BookContext;