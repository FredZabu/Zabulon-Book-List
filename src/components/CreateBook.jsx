/* eslint-disable react/prop-types */
import { useState, useContext } from 'react';
import '../App.css';
import BookContext from '../context/contextProvider';

function CreateBook() {
    const {handleCreateBook } = useContext(BookContext);
    const [value, setValue] = useState('');
    const handleChange = (event) => {
        setValue(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        handleCreateBook(value);
        setValue('');
    }
  return (
      <div className="create-book">
          <form action="" onSubmit={handleSubmit}>
              <label htmlFor="">Title</label>
              <input type="text" value={value} onChange={handleChange} name="" id="" />
              <button type="submit" className='btn'>Add Book</button>
          </form>
    </div>
  )
}

export default CreateBook;