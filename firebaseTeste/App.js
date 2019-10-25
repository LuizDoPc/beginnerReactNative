import React, { Component } from "react";
import { Text, View, Button } from "react-native";

import firebase from "@firebase/app";
import "@firebase/auth";
import "@firebase/database";

export default class App extends Component {
  constructor(props) {
    super(props);
    var config = {
      apiKey: "AIzaSyC02kanV1XJXtsVl1eTiAdxBIpod4f5jQw",
      authDomain: "configuracaofirebasereac-be7db.firebaseapp.com",
      databaseURL: "https://configuracaofirebasereac-be7db.firebaseio.com",
      projectId: "configuracaofirebasereac-be7db",
      storageBucket: "configuracaofirebasereac-be7db.appspot.com",
      messagingSenderId: "930512871423"
    };
    firebase.initializeApp(config);

    this.state = { pessoas: [], logado: false };

    const usuario = firebase.auth();

    usuario.onAuthStateChanged(usuarioAtual => {
      if (usuarioAtual) {
        alert("logged");
        this.setState({ logado: true });
      } else {
        alert("!logged");
        this.setState({ logado: false });
      }
    });
  }

  salvarDados() {
    if (this.state.logado) {
      var funcionarios = firebase.database().ref("funcioarios");

      funcionarios.push().set({
        nome: "Garfield",
        altura: "0.3",
        peso: "254"
      });
    } else {
      alert("faça login!");
    }
  }

  listarDados() {
    if (this.state.logado) {
      var nomes = firebase.database().ref("funcioarios");
      let array = [];
      nomes.on("value", snapshot => {
        array = [];
        snapshot.forEach(childSnapshot => {
          array.push({
            nome: childSnapshot.val().nome,
            altura: childSnapshot.val().altura,
            peso: childSnapshot.val().peso
          });
        });
        this.setState({ pessoas: array });
      });
    } else {
      alert("faça login!");
    }
  }

  cadastrarUsuario() {
    var email = "luizsoares@ioasys.com.br";
    var senha = "abc123";

    const usuario = firebase.auth();

    usuario.createUserWithEmailAndPassword(email, senha).catch(erro => {
      alert(erro.message);
    });
  }

  deslogarUsuario() {
    const usuario = firebase.auth();
    usuario.signOut();
  }

  logarUsuario() {
    var email = "luizsoares@ioasys.com.br";
    var senha = "abc123";

    const usuario = firebase.auth();
    usuario.signInWithEmailAndPassword(email, senha).catch(erro => {
      alert(erro.message);
    });
  }

  render() {
    return (
      <View>
        <Button
          onPress={() => {
            this.salvarDados();
          }}
          title="Salvar dados"
          color="#841584"
        />
        <Button
          onPress={() => {
            this.listarDados();
          }}
          title="Listar dados"
          color="#84ee00"
        />
        <Button
          onPress={() => {
            this.cadastrarUsuario();
          }}
          title="Cadastrar usuario"
          color="#847777"
        />
        <Button
          onPress={() => {
            this.logarUsuario();
          }}
          title="Logar"
          color="#845555"
        />
        <Button
          onPress={() => {
            this.deslogarUsuario();
          }}
          title="Deslogar"
          color="#84efef"
        />
        {this.state.pessoas.map(item => {
          return (
            <Text key={item.nome}>
              {item.nome} tem {item.altura}m e pesa {item.peso}kg.
            </Text>
          );
        })}
        <Text>{this.state.pessoas.nome}</Text>
      </View>
    );
  }
}