import React from "react";
import { View, Text } from "react-native";
import Visor from "./visor";

const Resultado = (props) => {
    return (
        <Visor resultado={props.valor}/>
    );
};

export { Resultado };