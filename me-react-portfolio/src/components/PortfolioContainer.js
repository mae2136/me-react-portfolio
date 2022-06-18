import React, { useState } from 'react';
import Header from "./Header";
import logo from '../logo.svg';
import Footer from "./Footer";
// import Content from "./Content";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";


function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'ABOUT') {
            return <AboutMe />;
        }
        if (currentPage === 'PORTFOLIO') {
            return <Portfolio />;
        }
        if (currentPage === 'CONTACT') {
            return <Contact />;
        }
        return <Resume />
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div className="App">
            {/* Header to contain Name and Nav Links */}
            <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
            <div>
                <img src={logo} className="App-logo" alt="logo" />
                {renderPage()}
            </div>
            {/* Footer Component that contains footer stuff (TBD) */}
            <Footer />
        </div>
    )
}

export default PortfolioContainer;