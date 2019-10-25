import React from "react";
import { Router, Scene } from "react-native-router-flux";

import Home from "./screens/Home";
import SobreJogo from "./screens/SobreJogo";
import OutrosJogos from "./screens/OutrosJogos";
import Resultado from "./screens/Resultado";

const rotas = () => {
  return (
    <Router sceneStyle={{ paddingTop: 50 }}>
      <Scene key="principal" component={Home} initial title="Cara ou Coroa" />
      <Scene key="sobrejogo" component={SobreJogo} title="Sobre o Jogo" />
      <Scene key="outrosjogos" component={OutrosJogos} title="Outros Jogos" />
      <Scene key="resultado" component={Resultado} title="Resultado" />
    </Router>
  );
};

export default rotas;
