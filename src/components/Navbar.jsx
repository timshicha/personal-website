import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        <nav className="bg-black shadow-md p-3 bg-black fixed w-full font-georgia text-xl">
            <div className="flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold text-white">Timofey Shichalin</Link>

                {/* Desktop Links */}
                <div className="space-x-6 hidden sm:flex">
                    <Link to="/" className="text-white hover:text-gray-400">Home</Link>
                    <Link to="/projects" className="text-white hover:text-gray-400">Projects</Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="sm:hidden text-white hover:text-gray-400 text-2xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? "✕" : "☰"}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="flex flex-col mt-3 space-y-2 sm:hidden">
                    <Link to="/" className="text-white hover:text-gray-400 py-1">Home</Link>
                    <Link to="/projects" className="text-white hover:text-gray-400 py-1">Projects</Link>
                </div>
            )}
        </nav>
        {/* Spacer to make navbar take up space */}
        <div className="h-[50px]"></div>
        </>
    );
}


export default Navbar;