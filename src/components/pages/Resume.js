import React from "react";

// const navTitles = ["ABOUT ME", "PORTFOLIO", "CONTACT", "RESUME"];

function Resume() {
    return (
        <>
            <h2>Resume</h2>
            <div className="h-full w-full">
                <embed src={process.env.PUBLIC_URL + '/Escobar_Resume.pdf'} />
            </div>
        </>
    )
}

export default Resume