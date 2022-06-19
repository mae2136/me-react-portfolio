import React from "react";

const navTitles = ["ABOUT", "PORTFOLIO", "CONTACT", "RESUME"];

// Use currentPage to highlight link displayed for styling
// Loop throughtitle arrays to build out navbar
function Header({ currentPage, handlePageChange}) {
    return (
        <header>
            <h1>Miguel Escobar</h1>
            <nav>
                <ul>
                    {navTitles.map((title, index) => (
                        <li className={title} key={index} onClick={() => handlePageChange(title)}>{title}</li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header