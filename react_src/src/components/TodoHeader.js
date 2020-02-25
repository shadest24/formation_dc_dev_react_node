import React from "react";
import "./TodoHeader.css";
import Side_bar from "./Side_bar";


class TodoHeader extends React.Component {

  
  render() {
    let accountComponent = <p>Mon compte</p>
    let currentPage = "Connexion"
    if(this.props.userLogIn !== "") {
      accountComponent = <p>{this.props.userLogIn}</p>
      currentPage = "Profil"
    }
    return (
      <div className="menu">
        <div className="logo">
          {/* <Side_bar 
          setPage={(currrentPage) => {this.props.setPage(currentPage)}}  
        /> */}
        </div>
        <h1 onClick={() => this.props.setPage("Todo")}>★★ ToDoList ★★</h1>
        <div
          className="mon_compte"
          onClick={() => this.props.setPage(currentPage)}
        >
          <img className="auth"
            src="http://cdn.onlinewebfonts.com/svg/img_184513.png"
            alt="account"
          />

          {accountComponent}

        </div>
      </div>
    );
  }
}
export default TodoHeader;
