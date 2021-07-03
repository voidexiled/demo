import React, { Fragment } from 'react';
import Header from './header.jsx';
import Characters from './characters.jsx';
//import Prueba from './prueba.jsx';
import '../css/style.sass';
import '../css/header.css';

const app = () => {
    return (
        <Fragment>
            <Header title="Rick And Morty Api"/>
            <Characters/>
        </Fragment>
    )
}

export default app;