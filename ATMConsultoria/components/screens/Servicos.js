import React, { Component } from "react";
import { View, StyleSheet, StatusBar, Image, Text } from "react-native";
import BarraNavegacao from "../BarraNavegacao";

const detalheServico = require("../../img/detalhe_servico.png");

export default class Servico extends Component {
  render() {
    return (
      <View>
        <View>
          <StatusBar backgroundColor="#19D1C8" />
          <BarraNavegacao navigation={this.props.navigation} cor="#19D1C8" />
        </View>

        <View style={styles.cabecalho}>
          <Image source={detalheServico} />
          <Text style={styles.txtTitulo}>Nossos serviços</Text>
        </View>

        <View style={styles.detalheServico}>
          <Text style={styles.txtServico}>. Consultoria</Text>
          <Text style={styles.txtServico}>. Processsos</Text>
          <Text style={styles.txtServico}>. Acompanhamento de projetos</Text>
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
    color: "#19D1C8",
    marginLeft: 10,
    marginTop: 25
  },
  detalheServico: {
    padding: 20,
    marginTop: 20
  },
  txtServico: {
    fontSize: 18
  }
});
