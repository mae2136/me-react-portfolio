import React from "react";
import twitterLogo from "../assets/Twitter-Logo.png";
import githubLogo from "../assets/GitHub-Mark-Light-64px.png";
import linkedInLogo from "../assets/LI-In-Bug.png";

// https://www.w3schools.com/tags/att_a_target.asp

function Footer() {
    return (
        <footer className="flex flex-row justify-center p-3 bg-cyan-600">
            {/* <h3 className="text-slate-200 text-xl">@Miguel Escobar, 2022</h3> */}
            <a className="m-3" href="https://github.com/mae2136" target="_blank">
                <img src={githubLogo} alt="GitHub Logo"></img>
            </a>
            <a className="m-3" href="https://www.linkedin.com/in/miguel-a-escobar/" target="_blank">
                <img className="max-h-16" src={linkedInLogo} alt="LinkedIn Logo"></img>
            </a>
            <a className="m-3" href="https://twitter.com/angelarchero" target="_blank">
                <img className="max-h-16" src={twitterLogo} alt="Twitter Logo"></img>
            </a>
        </footer>
    )
}

export default Footer