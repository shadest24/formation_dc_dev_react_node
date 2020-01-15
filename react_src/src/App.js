import React from "react";
import "./App.css";
import TodoHeader from "./components/TodoHeader";
import TodoMain from "./components/TodoMain";
import Connect from "./components/Connect";

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
  setEstConnecter(newusers) {
    this.setState({ users: newusers });
  }
  setPage(page) {
    this.setState({ currentPage: page });
  }

  render() {
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
              while (
                !(
                  this.state.users[i].user === user &&
                  this.state.users[i].password === pass
                ) &&
                i < this.state.users.length
              ) {
                i++;
              }
              if (i < this.state.users.length) {
                let newusers = [...this.state.users];
                newusers[i].login = true;
                this.setEstConnecter(newusers);
                console.log("log in");
              } else {
                console.log("Erreur de saisie");
              }
            }}
          />
        )}
      </div>
    );
  }
}

export default App;
