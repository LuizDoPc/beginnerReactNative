import React, { Component } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import Itens from "./Itens";
import axios from "axios";

export default class ListaItens extends Component {
  constructor(props) {
    super(props);
    this.state = { listaItens: [] };
  }
  componentWillMount() {
    axios
      .get("http://faus.com.br/recursos/c/dmairr/api/itens.html")
      .then(response => {
        this.setState({ listaItens: response.data });
      })
      .catch(() => {
        console.log("erro");
      });
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: "#DDD" }}>
        {this.state.listaItens.map(item => {
          return <Itens key={item.titulo} item={item} />;
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({});
