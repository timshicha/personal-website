import React from "react";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";


const LogicGateSimulator = () => {



    return (
        <div className="bg-gray-200">
            <Navbar></Navbar>
            <div className="bg-gray-800 text-white text-center p-5 text-[40px] font-georgia">
                Logic Gate Simulator
                <p className="text-[15px] text-gray-400 mt-2">Webpage for building and simulating circuits with logic gates</p>
            </div>
            <div className="w-full bg-gray-700 text-white font-georgia text-[20px] p-10">
                <div className="text-center text-black text-[20px] mb-10">
                    <a href="https://github.com/timshicha/logic_gate_app" target="_blank" className="inline-block p-5 bg-gray-300 transition duration-300 hover:scale-105 mx-4 w-[250px] text-center">View GitHub repository</a>
                </div>
                <p className="text-[25px] text-blue-300">Tech stack:</p>
                <ul className="list-disc ml-7 mt-1">
                    <li>Front end: React + TailwindCSS</li>
                </ul>
                <p className="mt-6 text-[25px] text-blue-300">Basic description:</p>
                <ul className="list-disc ml-7 mt-1">
                    
                </ul>
                <p className="mt-6 text-[25px] text-blue-300">Features:</p>
                <ul className="list-disc ml-7 mt-1">
                    
                </ul>
            </div>
        </div>
    );
}

export default LogicGateSimulator;