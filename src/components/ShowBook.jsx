/* eslint-disable react/prop-types */
import EditBook from "./EditBook";
import DeleteBook from "./DeleteBook";
import '../App.css';
import { useState, useContext } from "react";
import BookContext from "../context/contextProvider";

function ShowBook({ book }) {
    const { handleEditBook } = useContext(BookContext);
    const [showEdit, setShowEdit] = useState(false);
    const [value, setValue] = useState(book.title)
    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }

    const handleSubmit = (event) => {

        event.preventDefault();
        handleEditBook(book.id, value)
        setShowEdit(!showEdit)
    }
    const handleChange = (event) => {
        setValue(event.target.value);
    }
    
  return (
      <div className="book">
          <div className="actionBtn">
              <EditBook  onEditClick = {handleEditClick} />
              <DeleteBook id = {book.id} />
          </div>
          <div>
              <img src={`https://picsum.photos/seed/${book.id}/150/150`} alt=""  />
          </div>
          <h3>Title : {book.title}</h3>
          <p>Book ID : {book.id}</p>
          
          {
              showEdit?           <div className="edit-container">
              <form action="" onSubmit={handleSubmit}>
                  <label >Edit title</label>
                  <input type="text" value = {value} onChange={handleChange} name="" id="" />
                  <button type="submit">Save</button>
              </form>
          </div> : ''
          }
    </div>
  )
}

export default ShowBook