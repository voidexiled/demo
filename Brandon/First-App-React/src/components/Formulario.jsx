import React, {useState}from 'react'

const Formulario = () => {
    const [Nombre, setNombre] = useState("");
    const [Edad, setEdad] = useState("");

    const Validar = (event) => {
        event.preventDefault();
        if (!Nombre.trim()) {
            console.log("No ha llenado el campo nombre");
        }
        if (!Edad.trim()) {
            console.log("No ha llenado el campo edad");
        }
    }

    return (
        <div className="container">
            <form className="form-group" onSubmit={Validar}>
                <input 
                    className="form-control mb-3" 
                    placeholder="Introduce tu nombre" 
                    type="text"
                    onChange={
                        (e) => {
                            setNombre(e.target.value)
                        }
                    }
                />

                <input 
                    className="form-control mb-3" 
                    placeholder="Introduce tu edad" 
                    type="text"
                    onChange={
                        (e) => {
                            setEdad(e.target.value)
                        }
                    }
                />

                <input className="btn btn-info w-100" 
                    type="submit"/>
            </form>
        </div>
    );
}

export default Formulario
