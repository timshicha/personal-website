import React from "react";
import Navbar from "../../components/Navbar";


const BinChallengeSystemPage = () => {



    return (
        <div className="bg-gray-200">
            <Navbar></Navbar>
            <div className="bg-gray-800 text-white text-center p-5 text-[40px] font-georgia">
                Bin Challenge System
                <p className="text-[15px] text-gray-400 mt-2">An ESP-32 microcontroller-powered system with an iPhone app</p>
            </div>
            <div className="w-full bg-gray-700 text-white font-georgia text-[20px] p-10">
                <div className="text-center text-black text-[20px] mb-10">
                    <a href="https://github.com/timshicha/Bin-Challenge.swiftpm" target="_blank" className="inline-block p-5 bg-gray-300 transition duration-300 hover:scale-105 mx-4 w-[250px] text-center">View GitHub repository</a>
                </div>
                <p className="text-[25px] text-blue-300">Technology:</p>
                <ul className="list-disc ml-7 mt-1">
                    <li>ESP-32 microcontroller with angle sensors</li>
                    <li>iPhone app: Swift</li>
                </ul>
                <p className="mt-6 text-[25px] text-blue-300">Basic description:</p>
                <ul className="list-disc ml-7 mt-1">
                    <li>Attach physical system onto arm</li>
                    <li>See real-time angle on iPhone app</li>
                </ul>
                <p className="mt-6 text-[25px] text-blue-300">App features:</p>
                <ul className="list-disc ml-7 mt-1">
                    <li>Zero the angle sensors through the app</li>
                    <li>See real-time visual arm position</li>
                    <li>Automatically start and end timer while arm in legal position</li>
                </ul>
            </div>
        </div>
    );
}

export default BinChallengeSystemPage;