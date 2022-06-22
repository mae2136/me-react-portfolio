import React from "react";

// const navTitles = ["ABOUT ME", "PORTFOLIO", "CONTACT", "RESUME"];

function Resume() {
    return (
        <>
            <h2 className="font-bold text-slate-200 justify-center text-3xl flex flex-row mb-3 border-b pb-2">Resume</h2>
            <div className="flex md:flex-row flex-col justify-center">
                <embed className="hidden md:flex py-1 rounded border-gray-800 drop-shadow h-80 w-80 md:min-h-screen md:min-w-full" src={process.env.PUBLIC_URL + '/Escobar_Resume.pdf'} />
                <p className="md:hidden text-slate-200 mb-3 text-xl text-center">Click the button below to download and read my resume</p>
                <a className="text-center md:hidden text-slate-200 p-2 rounded bg-gray-800 mb-2" href={process.env.PUBLIC_URL + '/Escobar_Resume.pdf'} download="escobar_resume.pdf">Download Resume</a>
            </div>
        </>
    )
}

export default Resume