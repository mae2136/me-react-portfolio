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
                {/* Taken from https://github.com/P1t2-Better-Booze-Bureau/Taco-bout-Hoppiness/blob/main/index.html*/}
                {/* Add collapsing navbar feature later */}
                {/* <button data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-violet-900 rounded-lg md:hidden hover:ring-2 ring-cyan-300 focus:outline-none" aria-controls="mobile-menu-2" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button> */}
                <ul className="md:flex md:flex-row flex-wrap md:flex-nowrap justify-around" id="mobile-menu">
                    {navTitles.map((title, index) => (
                        <li className={`${currentPage === title ? "bg-cyan-500 text-slate-100" : "bg-cyan-600 text-slate-200"} mx-3 p-2 md:border-dashed md:border-r md:border-l hover:cursor-pointer`} key={index} onClick={() => handlePageChange(title)}>{title}</li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header