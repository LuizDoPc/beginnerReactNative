import React, { Component } from "react";
import { View } from "react-native";

import { Topo, Resultado, Painel } from "./components";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { num1: "", num2: "", operacao: "soma", resultado: "" };

    this.calcular = this.calcular.bind(this);
    this.atualizaValor = this.atualizaValor.bind(this);
    this.atualizaOperacao = this.atualizaOperacao.bind(this);
  }

  calcular() {
    let resultado = 0;
    if (this.state.operacao == "soma") {
      resultado = parseFloat(this.state.num1) + parseFloat(this.state.num2);
    } else {
      resultado = parseFloat(this.state.num1) - parseFloat(this.state.num2);
    }
    this.setState({ resultado: resultado.toString() });
  }

  atualizaValor(nome, valor) {
    let obj = {};
    obj[nome] = valor;
    this.setState(obj);
  }

  atualizaOperacao(op) {
    this.setState({ operacao: op });
  }

  render() {
    return (
      <View>
        <Topo />
        <Resultado resultado={this.state.resultado} />
        <Painel
          num1={this.state.num1}
          num2={this.state.num2}
          operacao={this.state.operacao}
          calcular={this.calcular}
          atualizaOperacao={this.atualizaOperacao}
          atualizaValor={this.atualizaValor}
        />
      </View>
    );
  }
}
