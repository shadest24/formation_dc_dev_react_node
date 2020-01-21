import React from "react";
import "./TodoMain.css";

import TodoList from "./TodoList";
import TodoInput from "./TodoInput";
class TodoMain extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div className="mainList">
        <TodoInput
          addItem={value => {
            let newItem = { titre: value, isDone: false };
            let newItems = [...this.props.items, newItem];
            this.props.setItems(newItems);
          }}
        />
        <TodoList
          items={this.props.items}
          finishItem={index => {
            let newItems = [...this.props.items];
            newItems[index].isDone = !newItems[index].isDone;
            this.props.setItems(newItems);
          }}
          removeItem={index => {
            let newItems = [...this.props.items];

            newItems.splice(index, 1);
            this.props.setItems(newItems);
          }}
        />
      </div>
    );
  }
}

export default TodoMain;
