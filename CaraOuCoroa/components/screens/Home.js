import React, { Component } from "react";
import { StyleSheet, Image, View, TouchableHighlight } from "react-native";
import { Actions } from "react-native-router-flux";

const logo = require("../../img/logo.png");
const btnJogar = require("../../img/botao_jogar.png");
const btnSobre = require("../../img/sobre_jogo.png");
const btnOutros = require("../../img/outros_jogos.png");

export default class Home extends Component {
  render() {
    return (
      <View style={styles.cenaPrincipal}>
        <View style={styles.apresentacaoJogo}>
          <Image source={logo} />
          <TouchableHighlight
            onPress={() => {
              Actions.resultado();
            }}
          >
            <Image source={btnJogar} />
          </TouchableHighlight>
        </View>

        <View style={styles.rodape}>
          <TouchableHighlight
            onPress={() => {
              Actions.sobrejogo();
            }}
          >
            <Image source={btnSobre} />
          </TouchableHighlight>

          <TouchableHighlight
            onPress={() => {
              Actions.outrosjogos();
            }}
          >
            <Image source={btnOutros} />
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cenaPrincipal: {
    flex: 1,
    backgroundColor: "#61BD8C"
  },
  apresentacaoJogo: {
    flex: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  rodape: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around"
  }
});
