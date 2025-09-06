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
import { NextImageButton, PreviousImageButton } from "../components/Buttons";
import { EmptyDot, SolidDot } from "../components/Dots";

const BogeyPad = () => {

    const IMAGES = [bogeyPadRoundsImg, bogeyPadCoursesImg, bogeyPadProfileImg];
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
        let newCurrentImage = currentImage + 1;
        if(newCurrentImage >= IMAGES.length) {
            newCurrentImage = 0;
        }
        setCurrentImage(newCurrentImage);
    }

    const previousImage = () => {
        let newCurrentImage = currentImage - 1;
        if(newCurrentImage < 0) {
            newCurrentImage = IMAGES.length - 1;
        }
        setCurrentImage(newCurrentImage);
    }

    return (
        <div className="rounded-lg bg-gray-300 m-5 px-5 py-3">
            <div className="grid grid-cols-3 rounded-lg mb-3 gap-5">
                <div className="col-span-2">
                    <h2 className="font-bold text-[20px]">Bogey Pad</h2>
                    <p><i className="text-[13px]">
                        Mobile web app for scorekeeping disc golf rounds.
                    </i></p>
                    <div className="text-black my-2">
                        <ul className="list-disc ml-5">
                            <li>ReactJS + TailwindCSS client</li>
                            <li>Dexie DB in browser</li>
                            <li>ExpressJS backend</li>
                            <li>Backend hosted on GCP Cloud Run</li>
                            <li>SQL database by Supabase</li>
                        </ul>
                    </div>
                    <p className="mb-5"><i className="text-[13px]">
                        I developed this web app on my own in 2025. This app allows users to
                        very easily keep track of their disc golf scores, but also supports
                        backing up scores to the cloud. This app works great if you like simplicity
                        or if you like features, because with this app, you can choose.
                    </i></p>
                    <a href="https://bogeypad.com" className="underline text-blue-600">Go to live website</a>
                    <br />
                    <a href="https://github.com/timshicha/disc-golf-log" className="underline text-blue-600">View GitHub repository</a>

                </div>
                <div className="">
                    <div className="h-[400px]">
                        <img src={IMAGES[currentImage]} className="max-h-[400px] mx-auto"></img>
                    </div>
                    <PreviousImageButton onClick={previousImage} className="align-middle float-left"></PreviousImageButton>
                    <NextImageButton onClick={nextImage} className="align-middle float-right"></NextImageButton>
                    <div className="text-center mt-2">
                        {Array(IMAGES.length).fill().map((value, index) => {
                            if(index === currentImage) {
                                return <SolidDot onClick={() => {setCurrentImage(index)}} className="cursor-pointer align-middle"></SolidDot>
                            }
                            else {
                                return <EmptyDot onClick={() => {setCurrentImage(index)}} className="cursor-pointer align-middle"></EmptyDot>
                            }
                        })}
                    </div>
                </div>
            </div>
            <div className="text-center">
                <Link to="/projects/bogey-pad"><u className="text-gray-600">See More</u></Link>
            </div>
        </div>
    );
}

const BinChallengeSystem = () => {

    const IMAGES = [
        binAppScreenshot,
        level,
        lever,
        leverDown,
        microcontroller,
        angleSensor,
        binDrawing,
        esp32system,
        holdingBin,
    ];
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
        let newCurrentImage = currentImage + 1;
        if(newCurrentImage >= IMAGES.length) {
            newCurrentImage = 0;
        }
        setCurrentImage(newCurrentImage);
    }

    const previousImage = () => {
        let newCurrentImage = currentImage - 1;
        if(newCurrentImage < 0) {
            newCurrentImage = IMAGES.length - 1;
        }
        setCurrentImage(newCurrentImage);
    }

    return (
        <div className="rounded-lg bg-gray-300 m-5 px-5 py-3">
            <div className="grid grid-cols-3 rounded-lg mb-3 gap-5">
                <div className="col-span-2">
                    <h2 className="font-bold text-[20px]">Bin Challenge System</h2>
                    <p><i className="text-[13px]">
                        iPhone app and physical system using an ESP microcontroller to tracking arm angles
                    </i></p>
                    <div className="text-black my-2">
                        <ul className="list-disc ml-5">
                            <li>App written in Swift (XCode)</li>
                            <li>ESP32 microcontroller for physical system</li>
                            <li>Angle sensors to measure angles</li>
                        </ul>
                    </div>
                    <p className="mb-5"><i className="text-[13px]">
                        This was a solo project I built in March 2025. To ensure fair scoring at a challenge at
                        my previous job, I created a system that tracks a person's arm angle. The iPhone app
                        tracks how long someone's arm stays within a certain angle and stops the timer when the
                        arm is lowered or raised too high.
                    </i></p>
                    <a href="https://github.com/timshicha/Bin-Challenge.swiftpm" className="underline text-blue-600">View GitHub repository</a>
                </div>
                <div className="">
                    <div className="h-[400px]">
                        <img src={IMAGES[currentImage]} className="max-h-[400px] mx-auto"></img>
                    </div>
                    <PreviousImageButton onClick={previousImage} className="align-middle float-left"></PreviousImageButton>
                    <NextImageButton onClick={nextImage} className="align-middle float-right"></NextImageButton>
                    <div className="text-center mt-2">
                        {Array(IMAGES.length).fill().map((value, index) => {
                            if(index === currentImage) {
                                return <SolidDot onClick={() => {setCurrentImage(index)}} className="cursor-pointer align-middle"></SolidDot>
                            }
                            else {
                                return <EmptyDot onClick={() => {setCurrentImage(index)}} className="cursor-pointer align-middle"></EmptyDot>
                            }
                        })}
                    </div>
                </div>
            </div>
            <div className="text-center">
                <Link to="/projects/bin-challenge-system"><u className="text-gray-600">See More</u></Link>
            </div>
        </div>
    );
}



const Projects = () => {

    return (
        <>
            <Navbar></Navbar>
            <div className="rounded-lg bg-gray-300 m-5 px-5 py-3 text-center">
                <h1 className="font-bold text-[30px]">Projects</h1>
            </div>
            <BogeyPad></BogeyPad>
            <BinChallengeSystem></BinChallengeSystem>
        </>
    );

}

export default Projects;