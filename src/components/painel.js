import React, { Component } from "react";
import { View } from "react-native";
import Entrada from "../entrada";
import Operacao from "./operacao";
import Comando from "./comando";

class Painel extends Component {
    constructor(props){
        super(props);
        this.state = {
            resultado: '',
            numeroUm: '10',
            numeroDois: '25',
            operacao: 'soma',
        };
    }

    selecionarOperacao(operacao) {
        this.setState({ operacao });
    }

    alterarNumeroUm(valor) {
        this.setState({ numeroUm: valor });
    }

    alterarNumeroDois(valor) {
        this.setState({ numeroDois: valor });
    }

    calcular() {
        const numeroUm = parseFloat(this.state.numeroUm);
        const numeroDois = parseFloat(this.state.numeroDois);
        let resultado = null;
        
        switch(this.state.operacao){
            case 'soma':
                resultado = numeroUm + numeroDois;
                break;
            case 'subtracao':
                resultado = numeroUm - numeroDois;
                break
            case 'multiplicacao':
                resultado = numeroUm * numeroDois;
                break
            case 'divisao':
                resultado = numeroUm / numeroDois;
                break
        }
        console.log('Resultado', resultado)
        this.props.alterarResultado(resultado);
    }

    render() {
        return (
            <View>
                <Entrada 
                numeroUm={this.state.numeroUm} 
                numeroDois={this.state.numeroDois} 
                alterarNumeroUm={this.alterarNumeroUm.bind(this)}
                alterarNumeroDois={this.alterarNumeroDois.bind(this)} />
                <Operacao operacao={this.state.operacao} selecionarOperacao={this.selecionarOperacao.bind(this)}/>
                <Comando acao={this.calcular.bind(this)}/>
            </View>
        );
    }
} 

export { Painel };