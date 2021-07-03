import React from "react";

const Header = ({title}) => {
    return (
        <header>
            <div className="container">
                <div className="content">
                    <h1 className="title">{title}</h1>
                    <p className="text">This project ilustrate the character of the famouls Rick And Morty series</p>
                </div>
            </div>
        </header>
    )
}

export default Header;