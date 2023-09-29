/* eslint-disable react/prop-types */
import '../App.css';

function EditBook({ onEditClick }) {
    const handleEditClick = () => {
        onEditClick();
    }
  return (
    <div className='edit' onClick={handleEditClick}>Edit</div>
  )
}

export default EditBook