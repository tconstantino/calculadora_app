import React, { Component } from "react";
import { View, SafeAreaView, StatusBar } from "react-native";
import { Topo, Resultado, Painel } from "./";

class Calculadora extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resultado: '',
        };
    }

    alterarResultado(valor) {
        this.setState({ resultado: valor });
    }

    render() {
        return (
            <View>
                <StatusBar backgroundColor='#2196f3' barStyle='dark-content'/>
                <SafeAreaView>
                    <Topo />
                    <Resultado valor={this.state.resultado}/>
                    <Painel alterarResultado={this.alterarResultado.bind(this)}/>
                </SafeAreaView>
            </View>
        );
    }
}

export { Calculadora };