import React from "react";
import "./Connect.css";

class Connect extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputUserName: "",
      inputUserPassword: ""
    };
  }
  render() {
    return (
      <div className="Connect">
        <div>
          Identifiant :
          <input
            placeholder="Ajouter ID"
            value={this.state.inputUserName}
            onChange={e => {
              this.setState({ inputUserName: e.target.value });
            }}
          />
        </div>
        <div>
          Password :
          <input
            placeholder="Ajouter Password"
            value={this.state.inputUserPassword}
            onChange={e => {
              this.setState({ inputUserPassword: e.target.value });
            }}
          />
        </div>
        <div className="LogIn">
          <button
            className="btn btn-primary btn-sm"
            onClick={() => {
              this.props.connection(
                this.state.inputUserName,
                this.state.inputUserPassword
              );
              this.props.setPage("Todo");
            }}
          >
            Log In
          </button>
          <button className="btn btn-primary btn-sm">Sign In</button>
        </div>
      </div>
    );
  }
}

export default Connect;
