import React from "react";

const navTitles = ["ABOUT", "PORTFOLIO", "CONTACT", "RESUME"];

// Use currentPage to highlight link displayed for styling
// Loop throughtitle arrays to build out navbar
function Header({ currentPage, handlePageChange }) {
    return (
        <header className="md:p-5 flex flex-row flex-wrap md:flex-nowrap md:justify-between bg-cyan-600">
            <h1 className="mx-8">Miguel Escobar</h1>
            <nav className="justify-center ">
                <ul className="md:flex md:flex-row flex-wrap md:flex-nowrap justify-around">
                    {navTitles.map((title, index) => (
                        <li className={`${currentPage===title ? "md:bg-cyan-400" : "md:bg-cyan-600"} md:mx-3 md:p-2 md:border-dashed md:border-r md:border-l`} key={index} onClick={() => handlePageChange(title)}>{title}</li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header