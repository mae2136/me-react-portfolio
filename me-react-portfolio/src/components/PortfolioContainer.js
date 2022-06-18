import React, { useState } from 'react';
import Header from "./Header";
import logo from '../logo.svg';


function PortfolioContainer() {
    return (
        <div className="App">
            {/* Header to contain Name and Nav Links */}
            <Header />
            {/* Content component to handle what gets displayed */}
            <img src={logo} className="App-logo" alt="logo" />
            {/* Footer Component that contains footer stuff (TBD) */}
        </div>
    )
}

export default PortfolioContainer;