import React from "react";
import { StyleSheet } from "react-native";
import { Picker } from '@react-native-picker/picker';

const Operacao = (props) => {
    return (
        <Picker
        style={styles.operacoes}
        selectedValue={props.operacao}
        onValueChange={props.selecionarOperacao}>
            <Picker.Item label='Soma' value='soma' />
            <Picker.Item label='Subtração' value='subtracao' />
            <Picker.Item label='Multiplicação' value='multiplicacao' />
            <Picker.Item label='Divisão' value='divisao' />
        </Picker>
    );
};

const styles = StyleSheet.create({
    operacoes: {
        marginTop: 15,
        marginBottom: 15,
    }
});

export default Operacao;