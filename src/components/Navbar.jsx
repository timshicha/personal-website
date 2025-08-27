import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-black shadow-md p-3 bg-black">
            <div className="flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold text-white">Tim's Hub</div>

                {/* Desktop Links */}
                <div className="space-x-6 hidden md:flex">
                    <Link to="/" className="text-white hover:text-gray-400">Home</Link>
                    <Link to="/projects" className="text-white hover:text-gray-400">Projects</Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white hover:text-gray-400 text-2xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? "✕" : "☰"}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="flex flex-col mt-3 space-y-2 md:hidden">
                    <Link to="/" className="text-white hover:text-gray-400 py-1">Home</Link>
                    <Link to="/projects" className="text-white hover:text-gray-400 py-1">Projects</Link>
                </div>
            )}
        </nav>
    );
}


export default Navbar;