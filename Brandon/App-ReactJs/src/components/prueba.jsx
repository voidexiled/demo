import React, {useState, useEffect} from "react";

const Prueba = () => {
    // Estados
    const [prueba, setprueba] = useState();

    useEffect(() => {
        fetch('https://my-first-api-rest2021.herokuapp.com/api/movies')
        .then(response => response.json())
        .then(data => console.log(data));
    }, [])

    return (
        <p>funciona hijo puta</p>
    )
}

export default Prueba;