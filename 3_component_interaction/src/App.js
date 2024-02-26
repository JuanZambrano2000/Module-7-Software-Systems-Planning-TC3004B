//App.js
import React from 'react';
import {comments} from './commentData';
import Card from './Card';

function App() {
  return (
    <div>
      {comments.map((comment, index) => {
        return (
          <div key={index}>
            <Card commentObject={comment}/>
          </div>
        );
      })}
    </div>
  );
}

export default App;