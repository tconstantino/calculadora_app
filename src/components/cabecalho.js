import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Cabecalho = (props) => {
    return (
        <View style={ styles.topo }>
            <Text style={ styles. textoTitulo }>Calculadora 1.0</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    topo: {
        backgroundColor: '#2196f3',
        padding: 10,
        alignItems: 'center',
    },
    textoTitulo: {
        fontSize: 25,
        color: '#FFF',
    }
});

export default Cabecalho;