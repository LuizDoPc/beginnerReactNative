import React, { Component } from "react";
import { Image, StyleSheet, Text, View, Button } from "react-native";

export default class Topo extends Component {
  render() {
    return (
      <View style={styles.topo}>
        <Image source={require("../img/jokenpo.png")} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topo: {
    alignItems: "center"
  }
});
