import React from 'react';
import Body from './Body';
import commentData from './commentData';

//create a new component called Body, it receives props from commentData.js
function Body() {
    return (
        <div>
            <h1>Body</h1>
            <p>Body text</p>
            <p>{commentData[0].comment}</p>
        </div>
    )
}