// GroceryForm.js
import React from 'react';

const GroceryForm = props => {
  return (
    <div className="row grocery-form">
      <div className="small-12 columns">
        <form onSubmit={props.handleFormSubmit}>
          <div className="input-group">
            <input
              className="input-group-field"
              type="text"
              placeholder="name of grocery"
              value={props.name}
              onChange={props.handleChange}
            />
            <div className="input-group-button">
              <input type="submit" className="button" value="Add To List" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GroceryForm;
