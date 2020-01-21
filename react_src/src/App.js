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
          isDone: false
        },
        {
          titre: "Faire le ménage",
          isDone: true
        }
      ],
      currentPage: "Todo",
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
  setUsers(newusers) {
    this.setState({ users: newusers });
  }
  setPage(page) {
    this.setState({ currentPage: page });
  }

  render() {
    console.log(this.state.users)
    return (
      <div className="Todo">
        <TodoHeader setPage={page => this.setPage(page)} />
        {this.state.currentPage === "Todo" && (
          <TodoMain
            items={this.state.items}
            setItems={items => this.setState({ items: items })}
          />
        )}
        
        {this.state.currentPage === "Connexion" && (
          <Connect
            setPage={page => this.setPage(page)}
            connection={(user, pass) => {
              let i = 0;
              let userFound = false;
              while (!(userFound) 
                &&
                i < this.state.users.length
              ) {console.log(this.state.users, i, this.state.users[i], this.state.users.length);
                if (this.state.users[i].user === user &&
                  this.state.users[i].password === pass){
                    userFound = true
                  }
                i++;
              }
              if (i < this.state.users.length) {
                let newusers = [...this.state.users];
                newusers[i].login = true;
                this.setUsers(newusers);
                console.log("log in");
              } else {
                console.log("Erreur de saisie");
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



            users ={this.state.users}
          />
        )}
      </div>
    );
  }
}

export default App;
