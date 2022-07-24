import React from "react";
import { View } from "react-native";
import Entrada from "../entrada";
import Operacao from "./operacao";
import Comando from "./comando";

const Painel = (props) => {
    return (
        <View>
            <Entrada 
            numeroUm={props.numeroUm} 
            numeroDois={props.numeroDois} 
            alterarNumeroUm={props.alterarNumeroUm}
            alterarNumeroDois={props.alterarNumeroDois} />
            <Operacao operacao={props.operacao} selecionarOperacao={props.selecionarOperacao}/>
            <Comando acao={props.calcular}/>
        </View>
    );
};

export { Painel };