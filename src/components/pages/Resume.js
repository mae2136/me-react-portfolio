import React from "react";

// const navTitles = ["ABOUT ME", "PORTFOLIO", "CONTACT", "RESUME"];

function Resume() {
    return (
        <>
            <h2 className="justify-center flex flex-row py-2">Resume</h2>
            <div className="flex flex-row justify-center">
                <embed className="py-1 rounded border-gray-800 drop-shadow h-80 w-80 md:min-h-screen md:min-w-full" src={process.env.PUBLIC_URL + '/Escobar_Resume.pdf'} />
            </div>
        </>
    )
}

export default Resume