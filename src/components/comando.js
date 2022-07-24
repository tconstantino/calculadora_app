import React from "react";
import { View, Button, StyleSheet } from "react-native";

const Comando = (props) => {
    return (
        <View style={styles.botao}>
            <Button title='Calcular' onPress={props.acao} />
        </View>
    );
};

const styles = StyleSheet.create({
    botao: {
        borderWidth: 0.5,
        borderColor: '#007AFF',
    }
})

export default Comando;