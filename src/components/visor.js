import React, {Component } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const Visor = (props) => {
    console.log('visor props', props.resultado);
    return (
        <View>
            <TextInput 
                style={styles.textoResultado}
                placeholder="Resultado"
                editable={false} 
                value={props.resultado} />
        </View>
    );
};

const styles = StyleSheet.create({
    textoResultado: {
        fontSize: 30,
        fontWeight: 'bold',
        height: 100,
        color: 'black',
    }
})

export default Visor;