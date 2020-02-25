import React from "react";

class Profil extends React.Component {

	render() {
		let i = 0;
		var nbUserInList;
		while (!(this.props.users[i].login)) {
			if (this.props.users[i].login){
				nbUserInList = i
			}
			i++;
		}

		return (
			<div className="Profil">
				<div>
					{/* <p>{this.props.users[nbUserInList].user}</p>
					<p>{this.props.users[nbUserInList].email}</p> */}
				</div>
				<button onClick={() => {this.props.redirect("Todo")}}>Deconnexion</button>
			</div>
		);
	}
}

export default Profil;
