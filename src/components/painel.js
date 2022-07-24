import React, { Component } from "react";
import { View, Text } from "react-native";
import Entrada from "../entrada";
import Operacao from "./operacao";
import Comando from "./comando";

class Painel extends Component {
    constructor(props){
        super(props);
        this.state = {
            numeroUm: '10',
            numeroDois: '25',
        };
    }

    calcular() {
        const resultado = parseFloat(this.state.numeroUm) + parseFloat(this.state.numeroDois)
        console.log('Sim, vamos calcular!: ' + resultado);
    }

    render() {
        return (
            <View>
                <Entrada numeroUm={this.state.numeroUm} numeroDois={this.state.numeroDois}/>
                <Operacao />
                <Comando acao={this.calcular.bind(this)}/>
            </View>
        );
    }
} 

export { Painel };