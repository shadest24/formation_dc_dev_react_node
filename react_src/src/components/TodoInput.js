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
        <input className="text"
          placeholder="Ajouter une Liste"
          value={this.state.inputValue}
          onChange={e => {
            this.setState({ inputValue: e.target.value });
          }}
        />
        <button className="button"
          onClick={() => {
            if (!(this.state.inputUserName === ""))
            {
              this.props.addItem(this.state.inputValue);
              this.setState({ inputValue: "" });
            }else{
              console.log("ERROR : champs vide !")
            }
          }}
        >
          Ajouter
        </button>
      </div>
    );
  }
}

export default TodoInput;
