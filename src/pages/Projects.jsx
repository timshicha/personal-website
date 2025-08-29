import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import bogeyPadCoursesImg from "../assets/images/bogey-pad/courses.jpeg";
import bogeyPadRoundsImg from "../assets/images/bogey-pad/rounds.jpeg";
import bogeyPadProfileImg from "../assets/images/bogey-pad/profile.jpeg";
import { NextImageButton, PreviousImageButton } from "../components/Buttons";
import { EmptyDot, SolidDot } from "../components/Dots";

const BogeyPad = () => {

    const IMAGES = 3;
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
        let newCurrentImage = currentImage + 1;
        if(newCurrentImage >= IMAGES) {
            newCurrentImage = 0;
        }
        setCurrentImage(newCurrentImage);
    }

    const previousImage = () => {
        let newCurrentImage = currentImage - 1;
        if(newCurrentImage < 0) {
            newCurrentImage = IMAGES - 1;
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
                    <img src={
                        currentImage === 0 ? bogeyPadRoundsImg :
                        currentImage === 1 ? bogeyPadCoursesImg :
                        bogeyPadProfileImg
                    }></img>
                    <PreviousImageButton onClick={previousImage} className="align-middle float-left"></PreviousImageButton>
                    <NextImageButton onClick={nextImage} className="align-middle float-right"></NextImageButton>
                    <div className="text-center mt-2">
                        {Array(IMAGES).fill().map((value, index) => {
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
const Projects = () => {


    return (
        <>
            <Navbar></Navbar>
            <div className="rounded-lg bg-gray-300 m-5 px-5 py-3 text-center">
                <h1 className="font-bold text-[30px]">Projects</h1>
            </div>
            <BogeyPad></BogeyPad>
        </>
    );

}

export default Projects;