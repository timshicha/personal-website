import React from "react";
import Navbar from "../../components/Navbar";


const BinChallengeSystemPage = () => {



    return (
        <>
            <Navbar></Navbar>
            <div className="rounded-lg bg-gray-300 m-5 px-5 py-3 pb-[100px]">
                <h1 className="text-[25px] font-bold text-center">Bin Challenge</h1>
                <h2 className="font-bold text-[18px]">Summary</h2>
                <p>
                    Want to see your arm position displayed on a screen? Attach this system to your
                    arm and connect to the iPhone app to see the current angle of your arm.
                </p>
                <h2 className="font-bold text-[18px] mt-5">Insiration</h2>
                <p>
                    I don't like losing. What's worse is when you lose and you know that the other
                    person cheated. This is what was happening at my job. We had a challenge to see
                    who could hold a bin with their outstretched arm the longest. But I began to realize
                    that many people were dropping their arm but still "going". So I created a system
                    to ensure integrity. Competitors would attach the system to their arm, and then the
                    timer in the app would run until the arm was dropped below a specified threshold.
                </p>
            </div>
        </>
    );
}

export default BinChallengeSystemPage;