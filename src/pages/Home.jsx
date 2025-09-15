import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import headshot from "../assets/images/powell-butte.jpeg";
import bogeyPadAppIcon from "../assets/images/bogey-pad/appIcon512.png";
import githubIcon from "../assets/images/github-mark-white.png";

const Home = () => {

    // For fading things in when the page loads
    const [visible, setVisible] = useState(false);
    const [visible0_25seconds, setVisible0_25seconds] = useState(false);
    const [visible0_5seconds, setVisible0_5seconds] = useState(false);
    const [visible0_75seconds, setVisible0_75seconds] = useState(false);
    const [visible1seconds, setVisible1seconds] = useState(false);

    useEffect(() => {
        setVisible(true);
        setTimeout(() => setVisible0_25seconds(true), 50);
        setTimeout(() => setVisible0_5seconds(true), 100);
        setTimeout(() => setVisible0_75seconds(true), 150);
        setTimeout(() => setVisible1seconds(true), 200);
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
                    <div className="text-center mt-10">
                        <a href="/mike-letter.pdf" target="_blank" className="underline">
                            See full reference
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="grid grid-cols-3 m-3 gap-3">
                <div className="hover:scale-95 transition-transform duration-300">
                    <a href="https://bogeypad.com" target="_blank" className={`block h-full bg-gray-500 transition-opacity duration-[2s] text-white font-georgia p-10 text-[25px]
                        ${visible0_25seconds ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="text-center">
                            <img className="w-1/4 inline align-middle" src={bogeyPadAppIcon} alt="Bogey Pad App Icon"></img>
                            <div className="inline align-middle ml-5">
                                Launch my web app
                            </div>
                        </div>
                    </a>
                </div>
                <div className="hover:scale-95 transition-transform duration-300">
                    <a href="https://github.com/timshicha" target="_blank" className={`block h-full bg-gray-500 transition-opacity duration-[2s] text-white font-georgia p-10 text-[25px]
                        ${visible0_5seconds ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="text-center">
                            <img className="w-1/4 inline align-middle bg-gray-800 rounded-[100%]" src={githubIcon} alt="Bogey Pad App Icon"></img>
                            <div className="inline align-middle ml-5">
                                View my GitHub
                            </div>
                        </div>
                    </a>
                </div>
                <div className="hover:scale-95 transition-transform duration-300">
                    <a href="https://www.linkedin.com/in/shichatim/" target="_blank" className={`block h-full bg-gray-500 transition-opacity duration-[2s] text-white font-georgia p-10 text-[25px]
                        ${visible0_75seconds ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="text-center">
                            <div className="inline align-middle ml-5">
                                View my LinkedIn
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <div className={`w-full bg-gray-200 p-10 text-[20px] font-georgia
                transition-opacity duration-[2s] ${visible1seconds ? 'opacity-100' : 'opacity-0'}`}>
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

            <div className={`col-span-3 text-[30px] text-white p-10 font-georgia bg-gray-600 text-center
                transition-opacity duration-[2s] ${visible ? 'opacity-100' : 'opacity-0'}`}>
                <p className="">
                    "Whatever you do, work heartily, as for the Lord and not for men."
                </p>
                <p className="mt-5 text-center">Colossians 3:23</p>
            </div>

            <div className="h-[10px] bg-gray-200">

            </div>

            <div className="grid grid-cols-2 text-white text-[15px] p-10 font-georgia">
                <div>
                    <p className="text-[25px]">Education</p>
                    <div className="ml-7 border-l border-white pl-3">
                        <p className="my-2">B.S. Computer Science</p>
                        <p className="my-2">Portland State University (2019-2023)</p>
                        <p className="my-2">3.99 GPA</p>
                    </div>
                </div>
                <div>
                    <p className="text-[25px]">Work Experience</p>
                    <div className="ml-7 border-l border-white pl-3">
                        <p className="my-2">Electrical Assembly Technician</p>
                        <p className="my-2">Cascade Controls Inc. (Feb 2023 - Jun 2024)</p>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Home;