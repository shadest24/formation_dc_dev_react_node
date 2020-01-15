import React from "react";
import "./TodoList.css";

import TodoItem from "./TodoItem";

class TodoList extends React.Component {
  render() {
    console.log(this.props.items);
    return (
      <ul>
        {this.props.items.map((item, index) => {
          return (
            <TodoItem
              item={item}
              finish={() => {
                this.props.finishItem(index);
              }}
              remove={() => {
                this.props.removeItem(index);
              }}
            />
          );
        })}
      </ul>
    );
  }
}

export default TodoList;
