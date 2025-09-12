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
                <p className="text-center">To contact, please message me on <a href="https://www.linkedin.com/in/shichatim/" className="underline text-blue-300">LinkedIn</a>.</p>
            </div>
        </div>
    );
}

export default ContactPage;