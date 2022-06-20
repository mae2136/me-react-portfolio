import React from "react";

// Find a Good 
function Project({ projects }) {
    return (
        <>
            {projects.map((project) => (
                <div>
                    <h3>{project.name}</h3>
                </div>
            ))}
        </>
    )
}

export default Project