import React, { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default class Icone extends Component {
  render() {
    if (this.props.escolha == "Pedra") {
      return (
        <View style={styles.icone}>
          <Text stye={styles.txtJogador}>{this.props.jogador}</Text>
          <Image source={require("../img/Pedra.png")} />
        </View>
      );
    } else {
      if (this.props.escolha == "Papel") {
        return (
          <View style={styles.icone}>
            <Text stye={styles.txtJogador}>{this.props.jogador}</Text>
            <Image source={require("../img/Papel.png")} />
          </View>
        );
      } else {
        if (this.props.escolha == "Tesoura") {
          return (
            <View style={styles.icone}>
              <Text stye={styles.txtJogador}>{this.props.jogador}</Text>
              <Image source={require("../img/Tesoura.png")} />
            </View>
          );
        } else {
          return false;
        }
      }
    }
  }
}

const styles = StyleSheet.create({
  icone: {
    alignItems: "center",
    marginBottom: 20
  },
  txtJogador: {
    fontSize: 18
  }
});
