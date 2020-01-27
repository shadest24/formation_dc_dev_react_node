/* import React from "react";
import { slide as Menu } from 'react-burger-menu'
import "./Side_bar.css";

class Side_bar extends React.Component {
  showSettings (event) {
    event.preventDefault();

  }

  render () {
    return (
      <Menu>
        <a id="home" className="menu-item" onClick={() => this.props.setPage("Todo")}>Acceuil</a>
        <a id="about" className="menu-item" href="/about"></a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={ this.props.setPage("Connexion") } className="menu-item--small" href="">Historique</a>
      </Menu>
    );
  }
}


export default Side_bar;
 */