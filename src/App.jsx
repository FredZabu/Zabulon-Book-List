/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useContext } from "react"
import BookContext from "./context/contextProvider";
import CreateBook from "./components/CreateBook";
import BookList from "./components/BookList";

function App() {
  const { handleEffect } = useContext(BookContext);
  useEffect(() => {
    handleEffect();
  },[])

  
  return (
    <div>
      <div className="logo">
        <h1>Z</h1>
        <p>Book List</p>
      </div>
      <BookList />
      <CreateBook />
    </div>
  )
}

export default App