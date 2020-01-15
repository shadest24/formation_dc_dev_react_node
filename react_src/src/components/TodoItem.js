import React from "react";
import "./TodoItem.css";

class TodoItem extends React.Component {
  render() {
    return (
      <li>
        {this.props.item.titre} {this.props.item.isDone ? "Fini" : "En cours"}
        <button
          onClick={() => {
            this.props.finish();
          }}
        >
          {this.props.item.isDone ? "Continuer" : "Terminer"}
        </button>
        <button
          onClick={() => {
            this.props.remove();
          }}
        >
          Supprimer
        </button>
      </li>
    );
  }
}

export default TodoItem;
