import React from "react";

const navTitles = ["ABOUT", "PORTFOLIO", "CONTACT", "RESUME"];

// Use currentPage to highlight link displayed for styling
// Loop throughtitle arrays to build out navbar
function Header({ currentPage, handlePageChange }) {
    return (
        <header className="md:p-5 flex flex-row flex-wrap md:flex-nowrap md:justify-between bg-cyan-600">
            <h1 className="hidden md:flex mx-8 text-slate-200 text-5xl pb-3">Miguel Escobar</h1>
            <nav className="pb-2">
                <h1 className="md:hidden mx-8 text-slate-200 text-4xl pb-3">Miguel Escobar</h1>
                <ul className="md:flex md:flex-row flex-wrap md:flex-nowrap justify-around">
                    {navTitles.map((title, index) => (
                        <li className={`${currentPage === title ? "bg-cyan-400 text-slate-100" : "bg-cyan-600 text-slate-200"} mx-3 p-2 md:border-dashed md:border-r md:border-l hover:cursor-pointer`} key={index} onClick={() => handlePageChange(title)}>{title}</li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header