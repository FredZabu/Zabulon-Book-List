/* eslint-disable react/prop-types */
import EditBook from "./EditBook";
import DeleteBook from "./DeleteBook";
import '../App.css';
import { useState } from "react";
function ShowBook({ book, onDelete , onEdit }) {
    const [showEdit, setShowEdit] = useState(false);
    const [value, setValue] = useState(book.title)
    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }

    const handleSubmit = (event) => {

        event.preventDefault();
        onEdit(book.id, value)
        setShowEdit(!showEdit)
    }
    const handleChange = (event) => {
        setValue(event.target.value);
    }
    
  return (
      <div className="book">
          <div className="actionBtn">
              <EditBook onEdit = {onEdit} onEditClick = {handleEditClick} />
              <DeleteBook onDelete = {onDelete} id = {book.id} />
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