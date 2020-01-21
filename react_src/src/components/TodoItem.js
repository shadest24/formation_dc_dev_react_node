import React from "react";
import "./TodoItem.css";

class TodoItem extends React.Component {
  render() {
    return (
      <li onClick={() => {
        console.log("j'ai clicker sur une liste")
      }}>
        <div className="Titre_Li">
        {this.props.item.titre} 
        </div>
        <div className="En_cours">
        {this.props.item.isDone ? "Fini" : "En cours..."}
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation()
            this.props.finish();
          }}
        >
          {this.props.item.isDone ? "Continuer" : "Terminer"}
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation()
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
