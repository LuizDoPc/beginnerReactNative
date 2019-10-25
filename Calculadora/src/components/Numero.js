import React from "react";
import { TextInput, StyleSheet } from "react-native";

export default props => {
  return (
    <TextInput
      style={styles.numero}
      value={props.num}
      onChangeText={valor => {
        props.atualizaValor(props.nome, valor);
      }}
    />
  );
};

const styles = StyleSheet.create({
  numero: {
    width: 140,
    height: 80,
    fontSize: 20,
    borderBottomColor: "black",
    borderBottomWidth: 0.5
  }
});
