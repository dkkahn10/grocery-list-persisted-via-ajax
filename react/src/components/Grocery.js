// Grocery.js
import React from 'react';

const Grocery = props => {
  return (
    <li className="grocery">
      <div>
        <span>{props.name}</span>
      </div>
      <div className="float-right">
        <button className="button" type="button" onClick={props.handleButtonClick}>Delete</button>
      </div>
    </li>
  );
};

export default Grocery;
