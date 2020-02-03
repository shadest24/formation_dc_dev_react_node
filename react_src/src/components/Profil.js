import React from "react";

class Profil extends React.Component {
  
  }
  render() {
    return (
      <div className="Profil">
        <div className="Id_input">
          Identifiant :
          <input
            placeholder="ID"
            value={this.state.inputUserName}
            onChange={e => {
              this.setState({ inputUserName: e.target.value });
            }}
          />
        </div>
        <div className="Password_input">
          Password :
          <input type="password" name="password"
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
              if (!(this.state.inputUserName === "" || this.state.inputUserPassword === "")){
                var connect = this.props.connection(
                  this.state.inputUserName,
                  this.state.inputUserPassword
                );
                if (connect){
                  this.props.setPage("Todo");
                }
              }else{
                console.log("Error !! pas de texte dans les champs de connexion")
              }
            }}
          >
            Log In
          </button>
          <button 
          className="btn btn-primary btn-sm"
          onClick={() => {
            this.props.setPage("Inscription");
          }}
          >Sign In</button>
        </div>
      </div>
    );
  }
}

export default Profil;
