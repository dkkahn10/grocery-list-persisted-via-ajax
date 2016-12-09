// App.js
import React, { Component } from 'react';
import GroceryForm from './GroceryForm';
import GroceryList from './GroceryList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: [],
      name: ''
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    let groceryPost;
    let response;
    let lastGroceryId;

    let newGrocery = {
      id: Date.now(),
      name: this.state.name
    };

    groceryPost = JSON.stringify({name: this.state.name});

    response = $.ajax({
      url: '/api/groceries',
      contentType: 'application/json',
      method: 'POST',
      data: groceryPost
    });

    $.ajax({
      url: '/api/groceries',
      contentType: 'application/json'
    })

    .done(data => {
      lastGroceryId = data.groceries[data.groceries.length - 1].id;
      let newGrocery = {
        id: lastGroceryId,
        name: this.state.name
      };

      let newGroceries = [...this.state.groceries, newGrocery];

      this.setState({
        groceries: newGroceries,
        name: ''
      });
    });
  }

  handleButtonClick(id) {
    let newGroceries = this.state.groceries.filter(grocery => {
      return grocery.id !== id;
    });
    this.setState({ groceries: newGroceries });

    let groceryDelete = this.state.groceries.filter(grocery => {
      return grocery.id === id;
    });
    let groceryDeleteUrl = `/api/groceries/${groceryDelete[0].id}`;

    $.ajax({
      url: groceryDeleteUrl,
      contentType: 'application/json',
      method: 'DELETE'
    });
  }

  handleChange(event) {
    let newName = event.target.value;
    this.setState({ name: newName });
  }

  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: '/api/groceries',
      contentType: 'application/json'
    })
    .done(data => {
      this.setState({groceries: data.groceries})
    })
  }

  render() {
    return(
      <div className="small-4 small-centered columns app">
        <h1 className="text-center">Grocery List React</h1>
        <GroceryForm
          handleFormSubmit={this.handleFormSubmit}
          handleChange={this.handleChange}
          name={this.state.name}
        />
        <GroceryList
          groceries={this.state.groceries}
          handleButtonClick={this.handleButtonClick}
        />
      </div>
    );
  }
}

export default App;
