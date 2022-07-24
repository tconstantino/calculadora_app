import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const Visor = (props) => {
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