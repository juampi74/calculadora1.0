import React from "react";
import "../hojas-de-estilo/Boton.css";

const Boton = (props) => {
  const esOperador = (valor) => isNaN(valor) && valor !== "." && valor !== "=";

  return (
    <button
      className={`boton-contenedor ${
        esOperador(props.children) ? "operador" : ""
      }`.trimEnd()}
      onClick={() => props.manejarClick(props.children)}
    >
      {props.children}
    </button>
  );
};

export default Boton;
