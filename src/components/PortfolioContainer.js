import React, { useState } from 'react';
import Header from "./Header";
import Footer from "./Footer";
// import Content from "./Content";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";


function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('ABOUT');

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
        <div className='flex flex-auto flex-col bg-sky-300'>
            {/* Header to contain Name and Nav Links */}
            <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
            <div className='flex-auto container mx-auto border border-cyan-800 bg-cyan-700 rounded shadow-lg p-5 m-2'>
                {renderPage()}
            </div>
            {/* Footer Component that contains footer stuff (TBD) */}
            <Footer />
        </div>
    )
}

export default PortfolioContainer;