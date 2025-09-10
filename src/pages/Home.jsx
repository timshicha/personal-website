import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import headshot from "../assets/images/powell-butte.jpeg";
import bogeyPadAppIcon from "../assets/images/bogey-pad/appIcon512.png";
import githubIcon from "../assets/images/github-mark-white.png";
import linkedInIcon from "../assets/images/linkedInLogo.png";

const Home = () => {

    // For fading things in when the page loads
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
    }, []);

    return (
        <>
            <Navbar></Navbar>
            <div className="bg-gray-600 grid grid-cols-4 gap-5 p-10">
                <div className={`col-span-1
                    transition-opacity duration-[2s] ${visible ? 'opacity-100' : 'opacity-0'}`}>
                    <img src={headshot}></img>
                </div>

                <div className={`col-span-3 text-[30px] text-white p-10 font-georgia
                    transition-opacity duration-[2s] ${visible ? 'opacity-100' : 'opacity-0'}`}>
                    <p className="">
                        "I have been consistently impressed with Tim's ability and productivity during the time that he has worked for our company."
                    </p>
                    <p className="mt-10">- Mike, Department Lead at Cascade Controls Inc.</p>
                    <p className="mt-10 text-center">See full reference</p>
                </div>
            </div>
            
            <div className="grid grid-cols-3 m-3 gap-3">
                <a href="https://bogeypad.com" target="_blank" className="transition-transform hover:scale-[95%] bg-gray-500 text-white font-georgia p-10 text-[25px]">
                    <div className="text-center">
                        <img className="w-1/4 inline align-middle" src={bogeyPadAppIcon} alt="Bogey Pad App Icon"></img>
                        <div className="inline align-middle ml-5">
                            Launch my web app
                        </div>
                    </div>
                </a>
                <a href="https://github.com/timshicha" target="_blank" className="transition-transform hover:scale-[95%] bg-gray-500 text-white font-georgia p-10 text-[25px]">
                    <div className="text-center">
                        <img className="w-1/4 inline align-middle bg-gray-800 rounded-[100%]" src={githubIcon} alt="Bogey Pad App Icon"></img>
                        <div className="inline align-middle ml-5">
                            View my GitHub
                        </div>
                    </div>
                </a>
                <a href="https://linkedin.com/in/timshicha" target="_blank" className="transition-transform hover:scale-[95%] bg-gray-500 text-white font-georgia p-10 text-[25px]">
                    <div className="text-center">
                        {/* <img className="w-1/4 inline align-middle bg-white" src={linkedInIcon} alt="Bogey Pad App Icon"></img> */}
                        <div className="inline align-middle ml-5">
                            View my LinkedIn
                        </div>
                    </div>
                </a>
            </div>

            <div className="w-full bg-gray-200 p-10 text-[20px] font-georgia">
                <p>
                    Do you want a junior developer that's aware of how things break when apps are pushed to production?
                    More importantly, do you want a developer that knows how to fix those issues?
                    That's exactly what I've been doing with my most recent web app. One browser hates cross-domain cookies,
                    another browser hates cookies from a different subdomain, and another browser won't set let you develop
                    in peace because your development environment isn't using https.
                    These are just a few of the issues I had to deal with, and there are many more I can deal with for you.
                </p>
                <div className="grid grid-cols-2">
                    <div>
                        <p className="mt-5">
                            My top tech stack:
                            <ul className="list-disc list-inside">
                                <li>ReactJS and TailwindCSS</li>
                                <li>NodeJS with Express</li>
                                <li>PostgreSQL</li>
                                <li>GCP, especially Cloud Run and Auth services</li>
                                <li>JavaScript/TypeScript</li>
                            </ul>
                        </p>
                        <p className="mt-5">
                            Other things I'm really familiar with:
                            <ul className="list-disc list-inside">
                                <li>Python (plus NumPy)</li>
                                <li>NoSQL (MongoDB)</li>
                                <li>C++</li>
                                <li>Docker</li>
                            </ul>
                        </p>
                        <p className="mt-5">
                            Things I have experience with:
                            <ul className="list-disc list-inside">
                                <li>Java</li>
                                <li>Swift</li>
                                <li>C#</li>
                            </ul>
                        </p>
                    </div>
                    <div>
                        <p className="mt-5">
                            Other skills:
                            <ul className="list-disc list-inside">
                                <li>Object Oriented Programming (OOP)</li>
                                <li>Vim text editor</li>
                                <li>Problem solving, algorithms</li>
                                <li>Excellent speaking and writing skills</li>
                                <li>Two native languages: English and Russian</li>
                                <li>Great communicator</li>
                                <li>Adaptable and quick learner</li>
                            </ul>
                        </p>
                    </div>
                </div>
                
            </div>
        </>
    );
}

export default Home;