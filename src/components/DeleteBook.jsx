/* eslint-disable react/prop-types */
import '../App.css';
import { useContext } from "react";
import BookContext from "../context/contextProvider";

function DeleteBook({ id }) {
  const { handleDeleteBook } = useContext(BookContext);
    const handleDeleteClick = () => {
        handleDeleteBook(id);
    }

  return (
    <div className="delete" onClick={handleDeleteClick}>X</div>
  )
}

export default DeleteBook