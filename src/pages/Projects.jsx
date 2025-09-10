import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import bogeyPadCoursesImg from "../assets/images/bogey-pad/courses.jpeg";
import bogeyPadRoundsImg from "../assets/images/bogey-pad/rounds.jpeg";
import bogeyPadProfileImg from "../assets/images/bogey-pad/profile.jpeg";
import angleSensor from "../assets/images/bin-challenge/angleSensor.jpeg";
import binDrawing from "../assets/images/bin-challenge/binDrawing.jpeg";
import esp32system from "../assets/images/bin-challenge/esp32system.jpeg";
import holdingBin from "../assets/images/bin-challenge/holdingBin.jpeg";
import level from "../assets/images/bin-challenge/level.jpeg";
import lever from "../assets/images/bin-challenge/lever.jpeg";
import leverDown from "../assets/images/bin-challenge/leverDown.jpeg";
import microcontroller from "../assets/images/bin-challenge/microcontroller.jpeg";
import binAppScreenshot from "../assets/images/bin-challenge/binAppScreenshot.jpeg";


const Projects = () => {

    return (
        <div className="bg-gray-200 pb-20">
            <Navbar></Navbar>
            <div className="text-center bg-gray-800 font-georgia font-bold tracking-wider text-[50px] text-white py-5 mb-10">
                Projects
            </div>

            <div className="w-full bg-gray-600 py-5">
                <div className="max-w-[700px] mx-auto">
                    <div className="text-center font-georgia font-bold text-[35px] text-white">Bogey Pad</div>
                    <div className="text-center text-gray-300 font-georgia">Mobile web app for keeping disc golf scores</div>
                    <div className="grid grid-cols-3 gap-8 p-5 mx-auto">
                        <img src={bogeyPadRoundsImg} className="mx-auto rounded-lg hover:scale-105 origin-left transition duration-300"></img>
                        <img src={bogeyPadCoursesImg} className="mx-auto rounded-lg hover:scale-105 transition duration-300"></img>
                        <img src={bogeyPadProfileImg} className="mx-auto rounded-lg hover:scale-105 transition duration-300"></img>
                    </div>
                    <div className="text-white font-georgia py-4 px-10">
                        <p>I developed and launched this mobile web app on my own in 2025. It allows users to keep track
                            of their disc golf scores in a simple and intuitive way. The app also allows the option to log
                            in to save scores to the cloud and add friends.
                        </p>
                        <p className="mt-5">Stack:
                            <ul className="list-disc ml-7">
                                <li>ReactJS + TailwindCSS client</li>
                                <li>Dexie DB in browser</li>
                                <li>ExpressJS backend</li>
                                <li>Backend hosted on GCP Cloud Run</li>
                                <li>SQL database by Supabase</li>
                            </ul>
                        </p>
                        <div className="mt-10 text-center">
                            <a href="https://bogeypad.com" target="_blank" className="inline-block p-5 bg-gray-800 transition duration-300 hover:scale-105 mx-2 w-[150px] text-center">Go to web app</a>
                            <Link to="/projects/bogey-pad" className="inline-block p-5 bg-gray-800 transition duration-300 hover:scale-105 mx-2 w-[150px] text-center">More details</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full bg-gray-600 mt-20 py-5">
                <div className="max-w-[700px] mx-auto">
                    <div className="text-center font-georgia font-bold text-[35px] text-white">Bin Challenge System</div>
                    <div className="text-center text-gray-300 font-georgia">iPhone app and physical ESP-32 microcontroller system to track arm movement</div>
                    <div className="grid grid-cols-3 gap-8 p-5 mx-auto">
                        <div>
                            <img src={binAppScreenshot} className="mx-auto rounded-lg hover:scale-105 origin-left transition duration-300"></img>
                            <img src={leverDown} className="mx-auto rounded-lg hover:scale-105 transition duration-300 mt-3"></img>
                        </div>
                        <div>
                            <img src={level} className="mx-auto rounded-lg hover:scale-105 transition duration-300"></img>
                            <img src={microcontroller} className="mx-auto rounded-lg hover:scale-105 transition duration-300 mt-3"></img>
                            <img src={angleSensor} className="mx-auto rounded-lg hover:scale-105 transition duration-300 mt-3"></img>
                        </div>
                        <div>
                            <img src={holdingBin} className="mx-auto rounded-lg hover:scale-105 transition duration-300"></img>
                            <img src={lever} className="mx-auto rounded-lg hover:scale-105 transition duration-300 mt-3"></img>
                        </div>
                    </div>
                    <div className="text-white font-georgia py-4 px-10">
                        <p>
                            This was a solo project I built in March 2025. To ensure fair scoring at a challenge at
                            my previous job, I created a system that tracks a person's arm angle. The iPhone app
                            tracks how long someone's arm stays within a certain angle and stops the timer when the
                            arm is lowered or raised too high.
                        </p>
                        <p className="mt-5">
                            Technology used:
                            <ul className="list-disc ml-7">
                                <li>App written in Swift (XCode)</li>
                                <li>ESP-32 microcontroller for physical system</li>
                                <li>Angle sensors to measure angles</li>
                            </ul>
                        </p>
                        <div className="mt-10 text-center">
                            <Link to="/projects/bin-challenge-system" className="inline-block p-5 bg-gray-800 transition duration-300 hover:scale-105 mx-2 w-[150px] text-center">More details</Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );

}

export default Projects;