import React from "react";

// Find a Good Card/Gallery. See below link
// https://morioh.com/p/0f8daffefadc

function Project({ project }) {
    return (
        // Figure out how to align 2 cards wide on desktop
        <div className="max-w-sm rounded overflow-hidden shadow-lg mb-2">
            {/* <img className="w-full" src={project.image} alt="Display" /> */}
            <div className="px-6 py-4">
                <div className="font-bold text-slate-200 text-xl mb-2">
                    {project.name}
                </div>
                <p className="text-slate-300 text-base">
                    {project.description}
                </p>
            </div>
            <div className="px-6 py-4">
                {/* Make an array of techs used in the project.tech, and loop through them to create a given bubble */}
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">mySQL</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Sequelize</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mt-2 ml-20">Handlebars</span>
            </div>
        </div>
    )
}

export default Project