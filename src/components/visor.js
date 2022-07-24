import React, {Component } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

class Visor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resultado: ''
        };
    }

    render(props) {
        return (
            <View>
                <TextInput 
                    style={styles.textoResultado}
                    placeholder="Resultado"
                    editable={false} 
                    value={this.state.resultado} />
            </View>
        );
    };
}

const styles = StyleSheet.create({
    textoResultado: {
        fontSize: 30,
        fontWeight: 'bold',
        height: 100,
        color: 'black',
    }
})

export default Visor;