import { useState } from "react";
import './Calculadora.css'

const Calculadora = () => {

    const [resultado, setResultado] = useState("")

    function acao(e) {
        // Será adicionado o valor do botão que foi clicado na variável resultado
        // e de event. O evento nesse caso é o click
        setResultado(resultado + e.target.innerText)
    }

    function calcular() {
        // Try-Catch necessário porque o método eval() não é tão confiável
        try {
            // Método eval() para realizar contas matemáticas 
            // Método String() para transformar em String
            setResultado(eval(String(resultado)));
        } catch (e) {
            setResultado("Erro");
        }
    }

    function resetar() {
        // Transforma a variável setResultado em uma String vazia
        setResultado("");
    }

    return (
        <section id="calculadora" className='container'>
            <input type="text" value={resultado} id='resultado' readOnly />
            <div id="botoes">
                <button onClick={acao}>7</button>
                <button onClick={acao}>8</button>
                <button onClick={acao}>9</button>
                <button className='operadores' onClick={acao}>+</button>
                <button onClick={acao}>4</button>
                <button onClick={acao}>5</button>
                <button onClick={acao}>6</button>
                <button className='operadores' onClick={acao}>-</button>
                <button onClick={acao}>1</button>
                <button onClick={acao}>2</button>
                <button onClick={acao}>3</button>
                <button className='operadores' onClick={acao}>*</button>
                <button onClick={acao}>0</button>
                <button onClick={acao}>.</button>
                <button onClick={resetar}>C</button>
                <button className='operadores' onClick={acao}>/</button>
            </div>
            <button className='calcular' onClick={calcular}>=</button>
        </section>
    )
}

export default Calculadora
