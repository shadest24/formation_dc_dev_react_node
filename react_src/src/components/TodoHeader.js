import React from "react";
import "./TodoHeader.css";
import Side_bar from "./Side_bar";


class TodoHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="menu">
        {/* <Side_bar 
          setPage={cPage => this.props.setPage(cPage)}  
        /> */}
        <div className="logo">
          <img
           /*src="http://download.seaicons.com/icons/paomedia/small-n-flat/1024/post-it-icon.png"
            href="#"
            alt="logo"*/
          />
        </div>
        <h1 onClick={() => this.props.setPage("Todo")}>★★ ToDoList ★★</h1>
        <div
          className="mon_compte"
          onClick={() => this.props.setPage("Connexion")}
        >
          <img
            src="http://cdn.onlinewebfonts.com/svg/img_184513.png"
            alt="account"
          />
          
          <p>Mon compte</p>
        </div>
      </div>
    );
  }
}
export default TodoHeader;
