import React from "react";
import "./TodoInput.css";

class TodoInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ""
    };
  }
  render() {
    return (
      <div className="input">
        <input
          placeholder="Ajouter une tache"
          value={this.state.inputValue}
          onChange={e => {
            this.setState({ inputValue: e.target.value });
          }}
        />
        <button
          onClick={() => {
            this.props.addItem(this.state.inputValue);
            this.setState({ inputValue: "" });
          }}
        >
          Add
        </button>
      </div>
    );
  }
}

export default TodoInput;
