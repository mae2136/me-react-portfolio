import React from "react";
import Project from '../Project';

const projects = [{ name: "Fully Booked", link: "https://fully-booked-2022.herokuapp.com/", image: "https://user-images.githubusercontent.com/97486569/168444445-ad5530cc-ad94-4f35-8dc8-ef0fe7901ef0.png", tech: ["Handlebars", "SQL", "Bootstrap", "node.js", "Express"] }, { name: "Taco'bout Hoppiness", link: "https://p1t2-better-booze-bureau.github.io/Taco-bout-Hoppiness/", image: "https://github.com/P1t2-Better-Booze-Bureau/Taco-bout-Hoppiness/blob/main/Assets/pictures/screenshot.PNG?raw=true", tech: ["HTML", "Javascript", "Tailwind CSS"] }, { name: "Weather Dashboard", link: "https://mae2136.github.io/Weather-Dashboard/", image: "https://github.com/mae2136/Weather-Dashboard/blob/main/Assests/screenshot.PNG?raw=true", tech: ["HTML", "Bootstrap", "Javascript"] }, { name: "Portfolio 1.0", link: "https://mae2136.github.io/Miguel-Escobar/", image: "https://github.com/mae2136/Miguel-Escobar/raw/main/Assets/screenshot.PNG", tech: ["HTML", "CSS", "Javascript"] },];

function Portfolio() {
    return (
        <>
            <h2 className="font-bold text-slate-200 justify-center text-3xl flex flex-row mb-3 border-b pb-2">Portfolio</h2>
            <div className="md:flex md:flex-row md:flex-wrap justify-around">
                {projects.map((project) => (
                    <Project project={project} />
                ))}
            </div>
        </>
    )
}

export default Portfolio