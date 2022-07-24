import React, { Component } from "react";
import { View, SafeAreaView, StatusBar } from "react-native";
import { Topo, Resultado, Painel } from "./";

class Calculadora extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numeroUm: '',
            numeroDois: '',
            operacao: 'soma',
            resultado: '',
        };
    }

    alterarResultado(valor) {
        this.setState({ resultado: valor.toString() });
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

        this.alterarResultado(resultado);
    }

    render() {
        return (
            <View>
                <StatusBar backgroundColor='#2196f3' barStyle='dark-content'/>
                <SafeAreaView>
                    <Topo />
                    <Resultado valor={this.state.resultado}/>
                    <Painel
                    numeroUm={this.state.numeroUm}
                    numeroDois={this.state.numeroDois}
                    operacao={this.state.operacao}
                    resultado={this.state.resultado}
                    alterarNumeroUm={this.alterarNumeroUm.bind(this)}
                    alterarNumeroDois={this.alterarNumeroDois.bind(this)}
                    selecionarOperacao={this.selecionarOperacao.bind(this)}
                    alterarResultado={this.alterarResultado.bind(this)}
                    calcular={this.calcular.bind(this)}/>
                </SafeAreaView>
            </View>
        );
    }
}

export { Calculadora };