import React, { useState, useEffect } from 'react';

export default function Timer() {
  const [time, setTime] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);
    //clean up of the interval
    return () => {clearInterval(intervalID)};
    //the dependency array is empty, so the effect runs only once
  }, []);
  
  //when the input changes, the name state is updated, so the timer stops, so we will add a dependency array
  const handleChange = ({ target }) => setName(target.value);

  return (
    <>
      <h1>Time: {time}</h1>
      <input onChange={handleChange} value={name} />
    </>
  );
}


