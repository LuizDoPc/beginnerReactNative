import React, { Component } from "react";
import { Image, StyleSheet, Text, View, Button } from "react-native";

export default class Painel extends Component {
  render() {
    return (
      <View style={styles.painel}>
        <View style={styles.btn}>
          <Button
            title="Pedra"
            onPress={() => {
              this.props.pai.jokenpo("Pedra");
            }}
          />
        </View>
        <View style={styles.btn}>
          <Button
            title="Papel"
            onPress={() => {
              this.props.pai.jokenpo("Papel");
            }}
          />
        </View>
        <View style={styles.btn}>
          <Button
            title="Tesoura"
            onPress={() => {
              this.props.pai.jokenpo("Tesoura");
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  painel: {
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    marginTop: 20
  },
  btnEscolha: {
    height: 90
  }
});
