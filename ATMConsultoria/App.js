import React, { Component } from "react";
import { Easing, Animated } from "react-native";
import Home from "./components/screens/Home";
import Clientes from "./components/screens/Clientes";
import Contatos from "./components/screens/Contatos";
import Empresa from "./components/screens/Empresa";
import Servicos from "./components/screens/Servicos";

import { createStackNavigator, createAppContainer } from "react-navigation";

class App extends Component {
  render() {
    return <Home navigation={navigation} />;
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    Clientes: { screen: Clientes },
    Contatos: { screen: Contatos },
    Empresa: { screen: Empresa },
    Servicos: { screen: Servicos }
  },
  {
    initialRouteName: "Home",
    headerMode: "none",
    defaultNavigationOptions: {
      gesturesEnabled: true
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;

        const height = layout.initHeight;
        const translateX = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0]
        });

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1]
        });

        return { opacity, transform: [{ translateX }] };
      }
    })
  }
);

export default createAppContainer(AppNavigator);
