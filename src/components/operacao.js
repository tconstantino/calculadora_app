import React, { Component} from "react";
import { StyleSheet } from "react-native";
import { Picker } from '@react-native-picker/picker';


class Operacao extends Component {
    constructor(props) {
        super(props);
    }
    
    render(props) {
        return (
            <Picker
            style={styles.operacoes}
            selectedValue={this.props.operacao}
            onValueChange={this.props.selecionarOperacao}>
                <Picker.Item label='Soma' value='soma' />
                <Picker.Item label='Subtração' value='subtracao' />
                <Picker.Item label='Multiplicação' value='multiplicacao' />
                <Picker.Item label='Divisão' value='divisao' />
            </Picker>
        );
    }
}

const styles = StyleSheet.create({
    operacoes: {
        marginTop: 15,
        marginBottom: 15,
    }
});

export default Operacao;