import React from "react";
import axios from "axios";

export default class App extends React.Component {
  state = {
    nomes: "",
    email: "",
    erro: ""
  };

  componentDidMount() {
    this.pegarNomes();
  }
  pegarNomes = () => {
    axios.get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users
        `,
        {
          headers: {
            Authorization: "ayrton-medrano-alves"
          }
        }
      )
      .then((resposta) => {
        this.setState({ nomes: resposta.data.result.list });
      })
      .catch((erro) => {
        this.setState({ erro: erro.response.data });
      });
  };

  render() {
    return (
      <main>
        {this.state.erro ? (
          <p>{this.state.erro}</p>
        ) : (
          this.state.nomes.map((nomes) => {
            return <p>{nomes.name}</p>;
          })
        )}
      </main>

    )
  }
