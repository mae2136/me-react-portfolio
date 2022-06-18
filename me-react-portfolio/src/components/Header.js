import React from "react";

const navTitles = ["ABOUT ME", "PORTFOLIO", "CONTACT", "RESUME"];

function Header() {
    return (
        <header>
            <h1>Miguel Escobar</h1>
            <nav>
                {navTitles.map((title) => (
                    <p>{title}</p>
                ))}
            </nav>
        </header>
    )
}

export default Header