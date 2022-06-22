import React from "react";

// const navTitles = ["ABOUT ME", "PORTFOLIO", "CONTACT", "RESUME"];

function Resume() {
    return (
        <>
            <h2 className="font-bold text-slate-200 justify-center text-3xl flex flex-row mb-3 border-b pb-2">Resume</h2>
            <div className="flex flex-row justify-center">
                <embed className="hidden md:flex py-1 rounded border-gray-800 drop-shadow h-80 w-80 md:min-h-screen md:min-w-full" src={process.env.PUBLIC_URL + '/Escobar_Resume.pdf'} />
                <button className="hidden">Download Resume</button>
            </div>
        </>
    )
}

export default Resume