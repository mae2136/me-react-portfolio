import React, { useState } from 'react';
import Header from "./Header";
import logo from '../logo.svg';
import Footer from "./Footer";
import Content from "./Content";


function PortfolioContainer() {
    return (
        <div className="App">
            {/* Header to contain Name and Nav Links */}
            <Header />
            {/* Content component to handle what gets displayed */}
            <div>
                <img src={logo} className="App-logo" alt="logo" />
                <Content />
            </div>
            {/* Footer Component that contains footer stuff (TBD) */}
            <Footer />
        </div>
    )
}

export default PortfolioContainer;