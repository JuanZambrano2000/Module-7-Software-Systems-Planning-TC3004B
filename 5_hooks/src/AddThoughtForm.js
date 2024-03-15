import React, { useState } from 'react';
import { generateId, getNewExpirationTime } from './utilities';

export function AddThoughtForm(props) {
  const [thought, setThought] = useState('');

  const handleTextChange = (event) => {
    setThought(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    
    const newThought = {
      id: generateId(),
      text: thought,
      expiresAt: getNewExpirationTime(),
    };
    props.addThought(newThought);
    setThought('');
    
  };

  return (
    <form className="AddThoughtForm" onSubmit={handleSubmit}>
      <input
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        value={thought}
        onChange={handleTextChange}
      />
      <input type="submit" value="Add" />
    </form>
  );
}