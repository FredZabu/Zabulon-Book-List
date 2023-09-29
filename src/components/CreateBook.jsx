/* eslint-disable react/prop-types */
import { useState } from 'react';
import '../App.css';

function CreateBook({onCreate}) {
    const [value, setValue] = useState('');
    const handleChange = (event) => {
        setValue(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const id = Math.round(Math.random() * 999);
        onCreate(id, value);
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