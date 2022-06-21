import React from "react";

function AboutMe() {
    return (
        <>
            <div className="container m-2 justify-center">
                <h2 className="justify-center">About Me</h2>
                {/* Rounded image template found at https://codepen.io/oidre/pen/ExPaaEJ*/}
                <div className="relative w-64 h-64">
                    <img className="rounded-full border border-gray-100 shadow-sm" src="https://ca.slack-edge.com/T02TFJSUNCT-U02USAPQK8B-c50cbbe95768-512" alt="Miguel" />
                </div>
                <div>
                    <p>Welcome to my React portfolio site!</p>
                    <p>My name is Miguel Escobar, and I am an aspiring Web Developer. I am currently learning how to
                        become a web developer at Northwestern University in order to change my career. While changing careers is scary, I am having a blast learning how to make web applications!</p>
                    <p>I current work full time at Medline, LP as a Sr. Engineer
                        in the Research and Development department, helping to bring medical devices to market. I've
                        been in the industry almost 10 years now, having worked my way up from a laboratory technician
                        to now validating test equipment and ensuring compliance with U.S. and International Regulatory
                        standards for all
                        sorts of medical devices.</p>
                    <p>When I'm not busy with work and changing careers, I am out playing board and video games with my
                        family and friends. And fun fact: I'm going to be a father later this year!</p>
                    <p>Feel free to look through my portfolio, and reach out if you have any questions.</p>
                </div>
            </div>
        </>
    )
}

export default AboutMe