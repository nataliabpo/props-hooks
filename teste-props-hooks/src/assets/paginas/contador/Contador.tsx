import { useState } from "react";

function Contador(){
    const [valorx, setValorx] = useState(0);

    /*
    valor=x
    constante do hook
    inicia com valor, e pode sofrer alteração do valor com setValor
    */

    function somaClique(){
        setValorx (valorx + 1)
    }
    return(
        <div>
            <h1>Contador</h1>
            <p>O valor é: {valorx}</p>
            <button onClick={somaClique}>Adicionar 1 </button>
        </div>
        
    )

}
export default Contador;