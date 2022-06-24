import React from "react";

const frontEnd = ["Javascript", "CSS", "ReactJS", "Handlebars", "Tailwind CSS", "Bootstrap", "HTML", "PWA & Service Workers"];
const backEnd = ["mySQL/Sequelize", "MongoDB/Mongoose", "Express", "Node.js", "RESTful API Routes", "Apollo/GraphQL"];

function Resume() {
    return (
        <>
            <h2 className="font-bold text-slate-200 justify-center text-3xl flex flex-row mb-3 border-b pb-2">Resume</h2>
            <div className="flex flex-col justify-center md:justify-start">
                {/* <embed className="hidden md:flex py-1 rounded border-gray-800 drop-shadow h-80 w-80 md:min-h-screen md:min-w-full" src={process.env.PUBLIC_URL + '/Escobar_Resume.pdf'} /> */}
                <p className="text-slate-200 mb-3 text-xl text-center">Click the button below to download and read my resume</p>
                <a className="text-center text-slate-200 p-2 rounded bg-gray-800 mb-2" href={process.env.PUBLIC_URL + '/Escobar_Resume.pdf'} download="escobar_resume.pdf">Download Resume</a>
                <div className="text-center text-slate-200 p-2 min-w-fit block">
                    <h3 className="font-bold text-2xl border-b mb-2">Front-End Skills</h3>
                    <ul>
                        {frontEnd.map((skill, index) => {
                            return <li className="text-slate-200 mb-3 text-xl" key={index}>{skill}</li>
                        })}
                    </ul>
                </div>
                <div className="text-center text-slate-200 p-2 min-w-fit block">
                    <h3 className="font-bold text-2xl border-b mb-2">Back-End Skills</h3>
                    <ul>
                        {backEnd.map((skill, index) => {
                            return <li className="text-slate-200 mb-3 text-xl text-center" key={index}>{skill}</li>
                        })}
                    </ul>
                </div>
                
            </div>
        </>
    )
}

export default Resume