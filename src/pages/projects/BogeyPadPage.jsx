import React from "react";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";


const BogeyPadPage = () => {



    return (
        <div className="bg-gray-200">
            <Navbar></Navbar>
            <div className="bg-gray-800 text-white text-center p-5 text-[40px] font-georgia">
                Bogey Pad
                <p className="text-[15px] text-gray-400 mt-2">A mobile web app for keeping disc golf scores</p>
            </div>
            <div className="w-full bg-gray-700 text-white font-georgia text-[20px] p-10">
                <div className="text-center text-black text-[20px] mb-10">
                    <a href="https://bogeypad.com" target="_blank" className="inline-block p-5 bg-gray-300 transition duration-300 hover:scale-105 mx-4 w-[250px] text-center">Go to web app</a>
                    <a href="https://github.com/timshicha/disc-golf-log" target="_blank" className="inline-block p-5 bg-gray-300 transition duration-300 hover:scale-105 mx-4 w-[250px] text-center">View GitHub repository</a>
                </div>
                <p className="text-[25px] text-blue-300">Tech stack:</p>
                <ul className="list-disc ml-7 mt-1">
                    <li>Front end: React + TailwindCSS</li>
                    <li>Backend: Node.js + Express</li>
                    <li>PostgreSQL database by Supabase</li>
                </ul>
                <p className="mt-6 text-[25px] text-blue-300">Basic description:</p>
                <ul className="list-disc ml-7 mt-1">
                    <li>Add disc golf courses to your profile</li>
                    <li>Add rounds to your courses and modify round scores</li>
                    <li>Auto-calculates the round total and color codes the scores</li>
                </ul>
                <p className="mt-6 text-[25px] text-blue-300">Features:</p>
                <ul className="list-disc ml-7 mt-1">
                    <li>Log in with Google account or email + code to save data</li>
                    <li>Login session tokens stored as secure, http-only coookies</li>
                    <li>Search others' profiles to view their scores</li>
                    <li>Add friends to view private profiles</li>
                    <li>Easily merge local data with cloud data (or choose which to keep)</li>
                </ul>
                <hr className="my-10"></hr>
                <p className="mt-6 text-[25px] text-blue-300">Why Bogey Pad is superior (even to UDisc):</p>
                <ul className="list-disc ml-7 mt-1">
                    <li>0 setup</li>
                    <li>Create account only when you want to start saving to cloud</li>
                    <li>No sluggish performance</li>
                    <li>Ridiculously easy to navigate:</li>
                    <ul className="list-circle ml-7">
                        <li>Find any course or round in 3 seconds</li>
                        <li>Edit any round at any point instantly</li>
                        <li>Minimal clicking required: each click has a purpose</li>
                    </ul>
                    <li>Searching for users is very fast</li>
                </ul>
            </div>
        </div>
    );
}

export default BogeyPadPage;