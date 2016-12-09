// GroceryList.js
import React from 'react';
import Grocery from './Grocery';

const GroceryList = props => {
  let groceries = props.groceries.map(grocery => {
    const { id, name } = grocery;
    let onButtonClick = () => props.handleButtonClick(id);

    return (
      <Grocery
        key={id}
        name={name}
        handleButtonClick={onButtonClick}
      />
    );
  });

  return (
    <div className="row grocery-list">
      <div className="small-11 small-centered columns">
        <ul>
          {groceries}
        </ul>
      </div>
    </div>
  );
};

export default GroceryList;
