import React from "react";
import Navbar from "../components/Navbar";


const ContactPage = () => {





    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-gray-800 text-white text-center p-5 text-[40px] font-georgia">
                Contact
            </div>
            <div className="w-full bg-gray-700 text-white font-georgia text-[20px] p-10">
                <p className="mb-10">The following are the ways you can get ahold of me:</p>
                <p className="mb-2 text-blue-300">If you have my resume:</p>
                <ul className="list-disc ml-8">
                    <li>Text <span className="text-gray-500">(preferably)</span></li>
                    <li>Call <span className="text-gray-500">(Please text first; I may not pick up if your number gets flagged)</span></li>
                    <li>Email <span className="text-gray-500">(may take a few hours)</span></li>
                    <li>Send me a message via <a href="https://www.linkedin.com/in/shichatim/" className="underline text-blue-300">LinkedIn</a> <span className="text-gray-500">(may take a few hours)</span></li>
                </ul>
                <p className="mb-2 mt-10 text-blue-300">If you do NOT have my resume:</p>
                <ul className="list-disc ml-8">
                    <li>Send me a message via <a href="https://www.linkedin.com/in/shichatim/" className="underline text-blue-300">LinkedIn</a> <span className="text-gray-500">(may take a few hours)</span></li>
                </ul>
            </div>
        </div>
    );
}

export default ContactPage;