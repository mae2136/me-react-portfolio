import React from "react";

const navTitles = ["ABOUT", "PORTFOLIO", "CONTACT", "RESUME"];

function Header({ currentPage, handlePageChange}) {
    return (
        <header>
            <h1>Miguel Escobar</h1>
            <nav>
                {navTitles.map((title) => (
                    <p className={title} onClick={() => handlePageChange(title)}>{title}</p>
                ))}
            </nav>
        </header>
    )
}

export default Header