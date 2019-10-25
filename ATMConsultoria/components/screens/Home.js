import React, { Component } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Image,
  TouchableHighlight
} from "react-native";
import BarraNavegacao from "../BarraNavegacao";

const logo = require("../../img/logo.png");
const menuCliente = require("../../img/menu_cliente.png");
const menuContato = require("../../img/menu_contato.png");
const menuEmpresa = require("../../img/menu_empresa.png");
const menuServico = require("../../img/menu_servico.png");

export default class Home extends Component {
  render() {
    return (
      <View>
        <StatusBar backgroundColor="#CCC" />
        <BarraNavegacao cor="#CCC" />

        <View style={styles.logo}>
          <Image source={logo} />
        </View>

        <View style={styles.menu}>
          <View style={styles.menuGrupo}>
            <TouchableHighlight
              onPress={() =>
                this.props.navigation.navigate("Clientes", {
                  navigation: this.props.navigation
                })
              }
              underlayColor={"#B9C941"}
            >
              <Image source={menuCliente} style={styles.imgMenu} />
            </TouchableHighlight>

            <TouchableHighlight
              onPress={() =>
                this.props.navigation.navigate("Contatos", {
                  navigation: this.props.navigation
                })
              }
              underlayColor={"#61BD8C"}
            >
              <Image source={menuContato} style={styles.imgMenu} />
            </TouchableHighlight>
          </View>
          <View style={styles.menuGrupo}>
            <TouchableHighlight
              onPress={() =>
                this.props.navigation.navigate("Empresa", {
                  navigation: this.props.navigation
                })
              }
              underlayColor={"#EC7148"}
            >
              <Image source={menuEmpresa} style={styles.imgMenu} />
            </TouchableHighlight>

            <TouchableHighlight
              onPress={() =>
                this.props.navigation.navigate("Servicos", {
                  navigation: this.props.navigation
                })
              }
              underlayColor={"#19D1C8"}
            >
              <Image source={menuServico} style={styles.imgMenu} />
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    marginTop: 30,
    alignItems: "center"
  },
  menu: {
    alignItems: "center"
  },
  menuGrupo: {
    flexDirection: "row"
  },
  imgMenu: {
    margin: 15
  }
});
