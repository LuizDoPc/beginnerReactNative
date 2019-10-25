import React, { Component } from "react";
import { View, StyleSheet, StatusBar, Image, Text } from "react-native";
import BarraNavegacao from "../BarraNavegacao";

const detalheEmpresa = require("../../img/detalhe_empresa.png");

export default class Empresa extends Component {
  render() {
    return (
      <View>
        <View>
          <StatusBar backgroundColor="#EC7148" />
          <BarraNavegacao navigation={this.props.navigation} cor="#EC7148" />
        </View>

        <View style={styles.cabecalho}>
          <Image source={detalheEmpresa} />
          <Text style={styles.txtTitulo}>A empresa</Text>
        </View>

        <View style={styles.detalheEmpresa}>
          <Text style={styles.txtEmpresa}>
            A ATM Consultoria está no mercado a mais de 20 anos no mercado...
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cabecalho: {
    flexDirection: "row",
    marginTop: 20
  },
  txtTitulo: {
    fontSize: 30,
    color: "#EC7148",
    marginLeft: 10,
    marginTop: 25
  },
  detalheEmpresa: {
    padding: 20,
    marginTop: 20
  },
  txtEmpresa: {
    fontSize: 18
  }
});
