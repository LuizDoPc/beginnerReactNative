import React, { Component } from "react";
import { View, StyleSheet, Text, Image } from "react-native";

export default class Itens extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.foto}>
          <Image
            source={{ uri: this.props.item.foto }}
            style={{ height: 100, width: 100 }}
          />
        </View>
        <View style={styles.detalhesItem}>
          <Text style={styles.txtTitulo}>{this.props.item.titulo}</Text>
          <Text style={styles.txtValor}>R$ {this.props.item.valor}</Text>
          <Text style={styles.txtDetalhes}>
            Local: {this.props.item.local_anuncio}
          </Text>
          <Text style={styles.txtDetalhes}>
            Dt publicação{this.props.item.data_publicacao}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderColor: "#999",
    borderWidth: 0.5,
    margin: 10,
    padding: 10,
    flexDirection: "row",
    backgroundColor: "white"
  },
  foto: {
    width: 102,
    height: 102
  },
  detalhesItem: {
    marginLeft: 20,
    flex: 1
  },
  txtTitulo: {
    fontSize: 18,
    color: "blue",
    marginBottom: 5
  },
  txtValor: {
    fontSize: 16,
    fontWeight: "bold"
  },
  txtDetalhes: {
    fontSize: 15
  }
});
