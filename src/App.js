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
    this.setState({
      item: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item,
    };

    const updateItem = [...this.state.items, newItem];
    this.setState(
      {
        items: updateItem,
        id: uuid(),
        item: "",
        editItem: false,
      },
      () => console.log(this.state)
    );
  };

  clearList = (e) => {
    this.setState({
      items: [],
      id: uuid(),
      item: "",
      editItem: false,
    });
  };

  handleDelete = (id) => {
    const filteredItems = this.state.items.filter((item) => item.id !== id);
    this.setState({
      items: filteredItems,
    });
  };
  handleEdit = (id) => {
    const selectedItem = this.state.items.find((item) => item.id === id);
    this.setState({
      item: selectedItem.title,
      editItem: true,
    });
  };

  render() {
    // console.log(this.state);
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5">
              <h3 className="text-capitalize text-center">todo input</h3>
              <TodoInput
                item={this.state.item}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                handleEdit={this.handleEdit}
                editItem={this.state.editItem}
              />
              <TodoList
                items={this.state.items}
                clearList={this.clearList}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
