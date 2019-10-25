import React from "react";
import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";

import App from "./src/App";

const inicio = () => {
  return <App />;
};

AppRegistry.registerComponent(appName, () => inicio);
