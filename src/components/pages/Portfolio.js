import React from "react";
import Project from '../Project';

const projects = [{name: "Something", image: "Link to screenshot", tech: ["HTML", "Javascript", "Tailwind CSS"]}, {name: "Fully Booked", image: "Link to screenshot", tech: ["HTML", "Javascript", "Tailwind CSS"]}, {name: "Taco'bout Hoppiness", image: "Link to screenshot", tech: ["HTML", "Javascript", "Tailwind CSS"]}, {name: "Something", image: "Link to screenshot", tech: ["HTML", "Javascript", "Tailwind CSS"]}];

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