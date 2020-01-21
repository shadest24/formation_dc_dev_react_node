import React from "react";
import "./Inscription.css";

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
          <input className="Ajouter_id"
            placeholder="Ajouter ID"
            value={this.state.inputUserName}
            onChange={e => {
              this.setState({ inputUserName: e.target.value });
            }}
          />
        </div>
        <div>
          Password :
          <input className="Password"
            placeholder="Veuillez saisir votre mot de passe"
            value={this.state.inputUserPassword}
            onChange={e => {
              this.setState({ inputUserPassword: e.target.value });
            }}
          />
          <div> Password :
          <input className="Verif_mot_pass"
            placeholder="Confirmer votre mot de passe"
            value={this.state.inputUserPasswordSame}
            onChange={e => {
              this.setState({ inputUserPasswordSame: e.target.value });
            }}
          /></div>
        </div>
        <div>
          Adresse mail :
          <input className="Mail"
            placeholder="xxxx@xxx.xx"
            value={this.state.inputUserMail}
            onChange={e => {
              this.setState({ inputUserMail: e.target.value });
            }}
          />
        </div>
        <div className="Inscription">
          <button
            className="Bouton_inscription"
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
