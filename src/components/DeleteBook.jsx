/* eslint-disable react/prop-types */
import '../App.css';

function DeleteBook({ onDelete, id }) {
    const handleDeleteClick = () => {
        onDelete(id);
    }

  return (
    <div className="delete" onClick={handleDeleteClick}>X</div>
  )
}

export default DeleteBook