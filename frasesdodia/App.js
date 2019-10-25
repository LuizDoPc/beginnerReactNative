import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Alert
} from "react-native";

const gerarNovaFrase = () => {
  let random = Math.floor(Math.random() * 5);
  let frases = Array();
  frases[0] = "aa";
  frases[1] = "bb";
  frases[2] = "cc";
  frases[3] = "dd";
  frases[4] = "ee";

  Alert.alert(frases[random]);
};

export default class App extends Component {
  render() {
    return (
      <View style={styles.principal}>
        <Image source={require("./src/logo.png")} />

        <TouchableOpacity style={styles.botao} onPress={gerarNovaFrase}>
          <Text style={styles.textoBotao}>Nova Frase</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  principal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  botao: {
    backgroundColor: "#538530",
    color: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20
  },
  textoBotao: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  }
});
