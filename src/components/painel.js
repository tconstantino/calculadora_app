import React from "react";
import { View, Text } from "react-native";
import Entrada from "../entrada";
import Operacao from "./operacao";
import Comando from "./comando";

const Painel = (props) => {
    return (
        <View>
            <Entrada />
            <Operacao />
            <Comando />
        </View>
    );
};

export { Painel };