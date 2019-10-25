import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const geraNumeroAleatorio = () => {
	let nr = Math.floor(Math.random()*10);
	alert(nr);
}


export default class App extends Component {
  render() {
    return (
		<View>
			<Button
				title="Gerar um número randomico"
				onPress={geraNumeroAleatorio}
			/>
		</View>
    );
  }
}

const styles = StyleSheet.create({


});
