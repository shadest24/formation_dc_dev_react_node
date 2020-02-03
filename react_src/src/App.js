import React from "react";
import "./App.css";
import TodoHeader from "./components/TodoHeader";
import TodoMain from "./components/TodoMain";
import Connect from "./components/Connect";
import Inscription from "./components/Inscription";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        {
          titre: "Faire les courses",
          isDone: false,
          taches: [
            {
              titre: "fromage",
              isDone: false,
              dateCreation: "01/01/2000",
              dateFin: "01/01/3000",
              order: 1
            },
            {
              titre: "viande",
              isDone: false,
              dateCreation: "01/01/2000",
              dateFin: "01/01/3000",
              order: 2
              }
          ]
        },
        {
          titre: "Faire le ménage",
          isDone: true
        }
      ],
      currentPage: "Connexion",
      userLogIn: false,
      users: [
        {
          id: 1,
          user: "t",
          email: "tho@tho.fr",
          password: "h",
          login: false
        },
        {
          id: 2,
          user: "Tayeb",
          email: "ta@ta.fr",
          password: "tayeb",
          login: false
        }
      ]
    };
  }
  setUserLogIn(user) {
    this.setState({ userLogIn : user})
  } 
    setUsers(newusers) {
    this.setState({ users: newusers });
  }
  setPage(page) {
    this.setState({ currentPage: page });
  }

  render() {
    console.log("Users : ",this.state.users)
    return (
      <div className="Todo">
        <TodoHeader setPage={page => this.setPage(page)}
          userLogIn={this.state.userLogIn}
        />
        {this.state.currentPage === "Todo" && (
          <TodoMain
            items={this.state.items}
            setItems={items => this.setState({ items: items })}
            redirect={page => this.setState({currentPage: page})}
          />
        )}
        
        {this.state.currentPage === "Connexion" && (
          <Connect
            setPage={page => this.setPage(page)}
            connection={(user, pass) => {
              let i = 0;
              let userFound = false;
              while (!(userFound) && i <  this.state.users.length) {
                if (this.state.users[i].user === user && this.state.users[i].password === pass){
                  userFound = true
                }
                i++;
              }
              i--
              if (userFound) {
                let newusers = [...this.state.users];
                newusers[i].login = true;
                this.setUsers(newusers);
                this.setUserLogIn(newusers[i].user);
                console.log("log in");
                return true
              } else {
                console.log("Error, identifiant/mdp non valide");
                this.setUserLogIn("");
                return false
              }
            }}
          />
        )}
        {this.state.currentPage === "Inscription" && (
          <Inscription
            setPage={page => this.setPage(page)}
            users={users=> this.state.users}
            inscription={(userinscr,pass,mail) => {
              let newuser = {
                id: this.state.users.length + 1,
                user: userinscr,
                email: mail,
                password: pass,
                login: false
              };
              let newusers = [...this.state.users,newuser];
              this.setUsers(newusers);
              console.log("NewUsers",newusers);
            }
            }
          />
        )}
      </div>
    );
  }
}

export default App;
