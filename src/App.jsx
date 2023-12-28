import "./App.css";
import Logo from "./componentes/Logo.jsx";
import Pantalla from "./componentes/Pantalla.jsx";
import Boton from "./componentes/Boton.jsx";
import BotonClear from "./componentes/BotonClear.jsx";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");

  const agregarInput = (valor) => {
    let mostrar = "";
    if (input == "Syntax Error" || input == "Math Error") {
      mostrar = "";
    } else {
      mostrar = input;
    }
    setInput(mostrar + valor);
  };

  const calcularResultado = () => {
    if (input) {
      try {
        let resultado = evaluate(input);
        if (resultado == "Infinity" || resultado.toString() == "NaN") {
          resultado = "Math Error";
        }
        setInput(resultado);
      } catch (error) {
        setInput("Syntax Error");
      }
    }
  };

  return (
    <div className="App">
      <Logo />
      <main className="calculadora-contenedor">
        <Pantalla input={input} />
        <div className="fila">
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClear={() => setInput("")}>Clear</BotonClear>
        </div>
      </main>
    </div>
  );
}

export default App;
