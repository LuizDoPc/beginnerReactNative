import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

export default props => {
  return (
    <View>
      <TextInput
        placeholder="Resultado"
        style={styles.visor}
        editable={false}
        value={props.resultado}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  visor: {
    height: 100,
    fontSize: 30
  }
});
