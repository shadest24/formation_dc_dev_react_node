import React from "react";
import "./TodoList.css";

import TodoItem from "./TodoItem";

class TodoList extends React.Component {
  render() {
    console.log("Listes : ",this.props.items);
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
              onClick={() => {this.props.redirect("Connexion")}}
            />
          );
        })}
      </ul>
    );
  }
}

export default TodoList;
