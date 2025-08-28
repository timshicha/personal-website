import React, { useState } from "react";
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
        <div className="grid grid-cols-3 rounded-lg bg-gray-300 m-5 px-5 py-3">
            <div className="col-span-2">
                <h2 className="font-bold text-[20px]">Bogey Pad</h2>
                <i className="text-[13px]">Mobile web app for scorekeeping disc golf rounds</i>
                <div className="text-blue-600 ml-5 mt-2 float-left">
                    <ul className="list-disc">
                        <li>ReactJS + TailwindCSS client</li>
                        <li>ExpressJS backend</li>
                        <li>Backend hosted on GCP Cloud Run</li>
                        <li>SQL database by Supabase</li>
                    </ul>
                </div>
            </div>
            <div className="">
                <img src={
                    currentImage === 0 ? bogeyPadCoursesImg :
                    currentImage === 1 ? bogeyPadRoundsImg :
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