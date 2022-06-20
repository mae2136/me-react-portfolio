import React from "react";
import Project from '../Project';

const projects = [{name: "Something", description: "Some Text about it", image: "Link to screenshot"}, {name: "Something", description: "Some Text about it", image: "Link to screenshot"}, {name: "Something", description: "Some Text about it", image: "Link to screenshot"}, {name: "Something", description: "Some Text about it", image: "Link to screenshot"}];

function Portfolio() {
    return (
        <>
            <div>
                {projects.map((project) => (
                    <Project project={project} />
                ))}
            </div>
        </>
    )
}

export default Portfolio