import React, { Component } from "react";
import { v1 as uuid } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
// test vs code
class App extends Component {
  state = {
    items: [
      { id: 1, title: "Brush my teeth" },
      { id: 2, title: "Take a shower" },
    ],
    id: uuid(),
    item: "",
    editItem: false,
  };
  handleChange = (e) => {
    console.log("handle change");
  };

  handleSubmit = (e) => {
    console.log("handle submit");
  };

  clearList = (e) => {
    console.log("clear list");
  };

  handleDelete = (e) => {
    console.log("handle delete");
  };
  handleEdit = (e) => {
    console.log("handle edit");
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5">
              <h3 className="text-capitalize text-center">todo input</h3>
            </div>
          </div>
        </div>
        <TodoInput
          item={this.state.item}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleEdit={this.handleEdit}
        />
        <TodoList
          items={this.state.items}
          clearList={this.clearList}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
        />
      </div>
    );
  }
}

export default App;
