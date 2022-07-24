import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const Visor = (props) => {
    return (
        <View>
            <TextInput style={styles.textoResultado} placeholder="Resultado" editable={false} />
        </View>
    );
};

const styles = StyleSheet.create({
    textoResultado: {
        fontSize: 30,
        fontWeight: 'bold',
        height: 100,
    }
})

export default Visor;