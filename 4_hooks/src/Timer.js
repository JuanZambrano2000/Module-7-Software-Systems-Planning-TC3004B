import React, { useState, useEffect } from 'react';

export default function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);
    //clean up of the interval
    return () => {clearInterval(intervalID)};
  });

  return (
    <>
      <h1>Time: {time}</h1>
    </>
  );
}


