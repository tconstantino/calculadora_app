import React from "react";
import Visor from "./visor";

const Resultado = (props) => {
    return (
        <Visor resultado={props.valor}/>
    );
};

export { Resultado };