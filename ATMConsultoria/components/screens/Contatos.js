import React, { Component } from "react";
import { View, StyleSheet, StatusBar, Image, Text } from "react-native";
import BarraNavegacao from "../BarraNavegacao";

const detalheContatos = require("../../img/detalhe_contato.png");

export default class Contatos extends Component {
  render() {
    return (
      <View>
        <View>
          <StatusBar backgroundColor="#61BD8C" />
          <BarraNavegacao navigation={this.props.navigation} cor="#61BD8C" />
        </View>

        <View style={styles.cabecalho}>
          <Image source={detalheContatos} />
          <Text style={styles.txtTitulo}>Contatos</Text>
        </View>

        <View style={styles.detalheContatos}>
          <Text style={styles.txtContatos}>TEL: (37) 3212-8280</Text>
          <Text style={styles.txtContatos}>CEL: (37) 9 8825-1272</Text>
          <Text style={styles.txtContatos}>
            Email: contato@atmconsultoria.com.br
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
    color: "#61BD8C",
    marginLeft: 10,
    marginTop: 25
  },
  detalheContatos: {
    padding: 20,
    marginTop: 20
  },
  txtContatos: {
    fontSize: 18
  }
});
