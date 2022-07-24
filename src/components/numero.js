import React from "react";
import { TextInput, StyleSheet } from 'react-native';

const Numero = (props) => {
    return (
        <TextInput
            style={styles.numero}
            placeholder='Digite o valor'
            keyboardType='number-pad'
            value={props.valor}
            onChangeText={props.alterarNumero}/>
    )
}

const styles = StyleSheet.create({
    numero: {
        width: 160,
        height: 80,
        fontSize: 20,
        borderBottomWidth: 0.7,
        borderBottomColor: 'grey',
        margin: 20,
    }
});

export default Numero;