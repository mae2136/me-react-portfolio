import React from "react";

function AboutMe() {
    return (
        <>
            <div className="container m-2 justify-center">
                <h2 className="font-bold text-slate-200 justify-center text-3xl justify-center flex flex-row mb-3 border-b pb-2">About Me</h2>
                {/* Rounded image template found at https://codepen.io/oidre/pen/ExPaaEJ*/}
                <div className="flex flex-col items-center justify-around md:flex-row md: justify-end">
                    <div className="relative w-64 h-64 mb-3">
                        <img className="rounded-full border border-sky-100 shadow-sm" src="https://ca.slack-edge.com/T02TFJSUNCT-U02USAPQK8B-c50cbbe95768-512" alt="Miguel" />
                    </div>
                    <div className="px-3 mx-2 text-slate-200">
                        <p>Welcome to my ReactJS portfolio site!</p><br />
                        <p>My name is Miguel Escobar, and I am an aspiring Web Developer. I am currently learning how to
                            become a web developer at Northwestern University.</p><br />
                        <p>I currently work full time at Medline as a Sr. V&V Engineer
                            in the Research and Development department, helping to bring medical devices to market. I've
                            been in the industry almost 10 years now, and have worked on ensuring compliance with U.S. and International Regulatory standards for all sorts of medical devices. I'm now looking to do something new, and learning to be a full-stack web developer has been a blast so far!</p><br />
                        <p>When I'm not busy with work and changing careers, I am out playing board games, video games, and painting miniatures. And fun fact: I'm going to be a father later this year!</p>
                        <p>Feel free to look through my portfolio page or my <span><a className="underline hover:text-sky-100" href="https://github.com/mae2136">Github</a></span>, and reach out if you have any questions.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutMe