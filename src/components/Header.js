import React from "react";

const navTitles = ["ABOUT", "PORTFOLIO", "CONTACT", "RESUME"];

// Use currentPage to highlight link displayed for styling
// Loop throughtitle arrays to build out navbar
function Header({ currentPage, handlePageChange}) {
    return (
        <header className="justify-center md:flex md:flex-row md:justify-between">
            <h1>Miguel Escobar</h1>
            <nav>
                <ul className="md:flex md:flex-row justify-around">
                    {navTitles.map((title, index) => (
                        <li className={`md:mx-3 ${title}`} key={index} onClick={() => handlePageChange(title)}>{title}</li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header