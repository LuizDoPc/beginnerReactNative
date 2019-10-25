import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Topo from "./components/Topo";
import Painel from "./components/Painel";
import Icone from "./components/Icone";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { escolhaUsuario: "", escolhaComputador: "", resultado: "" };
  }

  jokenpo(escolhaUsuario) {
    let random = Math.floor(Math.random() * 3);
    let escolhaComputador = "Tesoura";

    if (random == 0) escolhaComputador = "Pedra";
    else if (random == 1) escolhaComputador = "Papel";

    if (escolhaComputador == escolhaUsuario) resultado = "Empate";
    else {
      if (escolhaComputador == "Pedra") {
        if (escolhaUsuario == "Papel") {
          resultado = "Você ganhou!";
        } else {
          resultado = "Você Perdeu!";
        }
      } else {
        if (escolhaComputador == "Papel") {
          if (escolhaUsuario == "Tesoura") {
            resultado = "Você ganhou!";
          } else {
            resultado = "Você Perdeu!";
          }
        } else {
          if (escolhaUsuario == "Pedra") {
            resultado = "Você ganhou!";
          } else {
            resultado = "Você Perdeu!";
          }
        }
      }
    }

    this.setState({
      escolhaUsuario: escolhaUsuario,
      escolhaComputador: escolhaComputador,
      resultado: resultado
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.view}>
          <Topo />

          <Painel pai={this} />

          <View style={styles.palco}>
            <Text style={styles.txtResultado}>
              Resultado: {this.state.resultado}
            </Text>

            <Icone
              escolha={this.state.escolhaComputador}
              jogador="Computador"
            />
            <Icone escolha={this.state.escolhaUsuario} jogador="Você" />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  palco: {
    alignItems: "center",
    marginTop: 20
  },
  txtResultado: {
    fontSize: 25,
    fontWeight: "bold",
    color: "red",
    height: 60
  },
  container: {
    justifyContent: "center",
    flex: 1
  },
  view: {
    height: 533
  }
});
