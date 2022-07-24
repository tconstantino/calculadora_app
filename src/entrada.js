import React from "react";
import { View, StyleSheet } from "react-native";
import Numero from "./components/numero";

const Entrada = (props) => {
    return (
        <View style={styles.numeros}>
            <Numero valor={props.numeroUm} alterarNumero={props.alterarNumeroUm}/>
            <Numero valor={props.numeroDois} alterarNumero={props.alterarNumeroDois}/>
        </View>
    );
};

const styles = StyleSheet.create({
    numeros: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});

export default Entrada;