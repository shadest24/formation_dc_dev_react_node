import React from "react";
import "./TodoItem.css";

class TodoItem extends React.Component {
  render() {
    return (
      <li>
        <div className="Titre_Li">
        {this.props.item.titre} 
        </div>
        <div className="En_cours">
        {this.props.item.isDone ? "Fini" : "En cours..."}
        </div>
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
