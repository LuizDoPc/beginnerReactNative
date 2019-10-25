import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableHighlight
} from "react-native";

const btnVoltar = require("../img/btn_voltar.png");

export default class BarraNavegacao extends Component {
  render() {
    if (this.props.navigation) {
      return (
        <View style={[styles.barraTitulo, { backgroundColor: this.props.cor }]}>
          <TouchableHighlight
            onPress={() => {
              this.props.navigation.goBack();
            }}
            underlayColor={this.props.cor}
          >
            <Image source={btnVoltar} />
          </TouchableHighlight>
          <Text style={styles.txtTitulo}>ATM Consultoria</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.barraTitulo}>
          <Text style={styles.txtTitulo}>ATM Consultoria</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  barraTitulo: {
    backgroundColor: "#CCC",
    padding: 10,
    height: 60,
    flexDirection: "row"
  },
  txtTitulo: {
    flex: 1,
    fontSize: 18,
    textAlign: "center",
    color: "black"
  }
});
