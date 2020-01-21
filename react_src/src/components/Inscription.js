import React from "react";

class Inscription extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputUserName: "",
      inputUserPassword: "",
      inputUserPasswordSame: "",
      inputUserMail: "",
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
          <input
            placeholder="Password identique"
            value={this.state.inputUserPasswordSame}
            onChange={e => {
              this.setState({ inputUserPasswordSame: e.target.value });
            }}
          />
        </div>
        <div>
          Mail :
          <input
            placeholder="xxxx@xxx.xx"
            value={this.state.inputUserMail}
            onChange={e => {
              this.setState({ inputUserMail: e.target.value });
            }}
          />
        </div>
        <div className="Inscription">
          <button
            className="btn btn-primary btn-sm"
            onClick={() => {
              if (!(this.state.inputUserName === "" || this.state.inputUserPassword === "" || this.state.inputUserPasswordSame === "" || this.state.inputUserMail === "") & (this.state.inputUserPassword === this.state.inputUserPasswordSame)) {
                  this.props.inscription(
                    this.state.inputUserName,
                    this.state.inputUserPassword,
                    this.state.inputUserMail
                  );
                  this.props.setPage("Todo");
              } else{
                if (!(this.state.inputUserPassword === this.state.inputUserPasswordSame)) {
                  console.log("Error, password different")
                
                } else {
                  console.log("Error, champs non remplis")
                }
              }
              }}
              
          >
            Valider Inscription
          </button>
        </div>
      </div>
    );
  }
}

export default Inscription;
