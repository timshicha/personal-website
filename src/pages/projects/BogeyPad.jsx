import React from "react";
import Navbar from "../../components/Navbar";


const BogeyPadPage = () => {



    return (
        <>
            <Navbar></Navbar>
            <div className="rounded-lg bg-gray-300 m-5 px-5 py-3 pb-[100px]">
                <h1 className="text-[25px] font-bold text-center">Bogey Pad</h1>
                <h2 className="font-bold text-[18px]">Summary</h2>
                <p>
                    You want to start keeping score within 10 seconds? This is the app. You don't
                    need an account or any set up to use it. But you also want to save your scores to
                    the cloud? This app does that too. Without logging in, the courses and scores are
                    stored on your device. Once you create an account, which is very simple too, your
                    scores will be backed up to the cloud.
                </p>
                <h2 className="font-bold text-[18px] mt-5">Inspiration</h2>
                <p>
                    Cascade Controls sent me and my coworker to Kuna, Idaho, for some field work on our
                    company's control panels at the Meta data center. For our free time, we tried out disc
                    golfing and really liked it. We wrote our scores in the iPhone notes app, and then
                    summed our scores by hand. After the trip, I made a Google Sheets to automate summing
                    the scores, but navigating was really tedious. I tried different apps, but they were all
                    either complicated or made it difficult to track scores. So I set to make my own app. I
                    wanted something extremely simple and user friendly, and since I was into disc golfing
                    myself, I knew exactly how to build the app in a way that would be pleasant to use.
                </p>
                <h2 className="font-bold text-[18px] mt-5">Evolution</h2>
                <p>
                    At first, it was an app that simply allowed you to add courses and rounds. This was a
                    working app, and my coworkers and I used it to track our scores. Then, my coworkers
                    made some great suggestions to improve the app's usability, and I worked on getting that
                    done. I began to love the app, so I worked on other features:
                    <ul className="list-disc ml-6 my-2">
                        <li>Adding/modifying dates of rounds and ordering</li>
                        <li>Ordering courses by categories</li>
                        <li>Modifying hole numbers (I ran into a course that had a 9B hole)</li>
                        <li>Settings</li>
                        <li>Saving data to cloud</li>
                        <li>Searching for other users</li>
                        <li>Adding other users as friends</li>
                    </ul>
                    Although there are some things I'm still fixing and improving, I am happy about the current
                    state of the app. It has been deployed for a while and used by a few people to keep track
                    of our disc golfing scores.
                </p>
            </div>
        </>
    );
}

export default BogeyPadPage;