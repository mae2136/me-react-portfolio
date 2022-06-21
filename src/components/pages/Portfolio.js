import React from "react";
import Project from '../Project';

const projects = [{name: "Fully Booked", image: "https://user-images.githubusercontent.com/97486569/168444445-ad5530cc-ad94-4f35-8dc8-ef0fe7901ef0.png", tech: ["Handlebars", "SQL", "Bootstrap", "node.js", "Express"]}, {name: "Taco'bout Hoppiness", image: "https://github.com/P1t2-Better-Booze-Bureau/Taco-bout-Hoppiness/blob/main/Assets/pictures/screenshot.PNG?raw=true", tech: ["HTML", "Javascript", "Tailwind CSS"]}];

function Portfolio() {
    return (
        <>
            <div className="md:flex md:flex-row">
                {projects.map((project) => (
                    <Project project={project} />
                ))}
            </div>
        </>
    )
}

export default Portfolio