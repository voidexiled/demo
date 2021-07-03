import React, {useState} from "react";

const contador = () => {
    const [contador, setcontador] = useState(0);

    const Aumentar = () => {
        setcontador(contador + 1);
    }

    const Disminuir = () => {
        setcontador(contador - 1);
    }

    return (
        <div className="contador">
            <h3>Cantidad del contador: {contador}</h3>
            <button onClick={Aumentar}>Aumentar</button>
            <button onClick={Disminuir}>Disminuir</button>
        </div>
    );
}

export default contador;