import React from "react";
import Navbar from "../components/Navbar";
import havilahPhoto from "../assets/images/havilah-photo.png";
import ti83pythagorean from "../assets/images/ti-83-pythagorean.png";
import binChallenge from "../assets/images/bin-challenge.png";

const Home = () => {



    return (
        <>
            <Navbar></Navbar>
            <div className="rounded-lg bg-gray-300 m-5 p-5">
                <h1 className="font-bold text-[30px] text-center mb-2">
                    Timofey Shichalin
                </h1>
                <div className="grid grid-cols-4 rounded-lg gap-5 bg-gray-300">
                    <main className="col-span-3 bg-gray-300">
                        <div className="w-1/2 max-w-[300px] float-left mr-5 mb-3">
                            <img src={havilahPhoto}></img>
                            <p className="text-[11px] font-bold text-gray-500 mt-2">Myself holding artwork of my stereotypes, thoughtfully created by my cousin.</p>
                        </div>
                        <h1 className="font-bold mb-1">15 Second About Me</h1>
                        <p className="mb-5">I'm Tim, and I'm here to solve your problem next. I am 24 years old, and I graduated from Portland State University in 2023 with a Bachelors in Computer Science. I have since worked as a panel technician at Cascade Controls, and in the meantime worked on a couple tech projects. I am seeking a job in tech, preferably in software engineering or web development.</p>
                        <h1 className="font-bold mb-1">Programming on a TI-83 Calculator</h1>
                        <div className="w-1/2 max-w-[200px] float-right mb-3 ml-5">
                            <img src={ti83pythagorean}></img>
                            <p className="text-[11px] font-bold text-gray-500 mt-2">The TI-83 that I first learned to program on.</p>

                        </div>
                        <p className="mb-5">
                            The first program I wrote wasn't on a computer. For my sophomore year of high school, I took the AP Statistics class, where we had to use the invT function on our TI-84 calculators.
                            Unlike everyone else, I had a TI-83, so I didn't have the function. When I got home, I went online to figure out if there was a workaround, and that's when I discovered the world of programming.
                            I followed a YouTube tutorial to program the function, and was really curious about the commands and logic I was writing. I programmed my calculator to use the Pythagorean theorem to calculate
                            the hypotenus of a triangle. Then I began to draw pictures, and eventually I made a clicker game with a shop. I was really invested.
                        </p>
                        <h1 className="font-bold mb-1">People Get Paid for This?</h1>
                        <p className="mb-5">
                            When I enrolled in college, I had no idea what I wanted to do, and with only a week before classes began, I registed for EE (electrical engineering) prerequisites. EE didn't seem too boring, it would pay
                            well, and it was math and logic heavy, both of which I excel in. One of the classes was CS-161, which is an introductory programming class. I was shocked. We were doing what I was doing on my TI-83 but
                            on laptops. How did I not know that this could be a career? On top of being exciting, the computer science field was big, paid well, and was projected to grow.
                            Coincidentally, I met a classmate who enrolled in civil engineering and also enjoyed the programming class, so halfway into our first quarter, we agreed to
                            switch to computer science majors.
                        </p>
                        <h1 className="font-bold mb-1">The Catastophe</h1>
                        <p className="mb-5">
                            I heard many computer science students were getting offers before they even graduated, so I stayed calm. COVID-19 came around, but I didn't think much of it. ChatGPT became a hit, but I remained unfazed.
                            Then I graduated and began to search for a job. I jumped on LinkedIn and the feed was unending posts of people getting laid off and getting no responses from employers. I began to realize that the field
                            is no longer sunshines and rainbows. It's a brutal war in which almost everyone is losing.
                        </p>
                        <h1 className="font-bold mb-1">The Golden Prison</h1>
                        <div className="w-1/2 max-w-[200px] float-right ml-5 mb-3">
                            <img src={binChallenge}></img>
                            <p className="text-[11px] font-bold text-gray-500 mt-2">A competition at my previous job involved holding a bin with an extended arm. This challenge inspired me to build a system to help my boss judge participants fairly.</p>
                        </div>
                        <p className="mb-5">
                            I didn't know how long it would take to find a job in software engineering, so I got a job assembling panels at Cascade Controls in Troutdale, OR. Working there inspired me to build two tech projects. The
                            first one was pretty simple, but the second one I took more seriously. I spent most of my time after work building this app, and I really wanted to put even more time into it. That's when I seriously realized
                            that I had gotten stuck at my job. The work environment was very pleasant, the work itself felt satisfactory, and I grew comfortable&mdash;too comfortable. I quit and spent more working on my app, and now I'm
                            searching for a job in my home field.
                        </p>
                    </main>
                    <aside className="bg-gray-300 border-l border-gray-600 p-4 text-[13px] text-gray-600">
                        {/* EDUCATION */}
                        <div className="mb-[70px]">
                            <p className="font-bold text-black text-[15px] mb-2">Education</p>
                            <p className="font-bold">
                                B.S. Computer Science  
                            </p>
                            <p className="ml-2">
                                <i className="text-blue-600">
                                Portland State University
                                <br/>
                                2019-2023
                                </i>
                            </p>
                        </div>
                        {/* ACCOMPLISHMENTS */}
                        <div className="mb-[70px]">
                            <p className="font-bold text-black text-[15px] mb-2">Notable Scores</p>
                            <p className="font-bold">
                                SAT: 1280  
                            </p>
                            <p className="ml-2 mb-2">
                                <i className="text-blue-600">
                                Math: 730 (97th percentile)
                                <br/>
                                Reading: 550: (65th percentile)
                                </i>
                            </p>
                            <p className="font-bold">
                                AP Statistics Exam: 5/5
                            </p>
                        </div>
                        {/* PREVIOUS WORK */}
                        <div className="mb-[70px]">
                            <p className="font-bold text-black text-[15px] mb-2">Previous Job</p>
                            <p className="font-bold">
                                Electrical Assembly Technician
                            </p>
                            <p className="ml-2">
                                <i className="text-blue-600">
                                Cascade Controls, Inc.
                                <br/>
                                Feb 2024 - Jun 2025
                                </i>
                            </p>
                        </div>
                        {/* PREVIOUS WORK */}
                        <div className="mb-[70px]">
                            <p className="font-bold text-black text-[15px] mb-2">Technical Skills</p>
                            <p className="ml-2">
                                <i className="text-blue-600">
                                    <ul className="list-disc ml-4">
                                        <li>ReactJS, TailwindCSS</li>
                                        <li>NodeJS, ExpressJS</li>
                                        <li>C++, Python, and other languages</li>
                                        <li>PostgreSQL, NoSQL, MongoDB</li>
                                        <li>Command line, VIM</li>
                                        <li>GCP (Cloud Run, Google Auth, and more)</li>
                                        <li>Docker</li>
                                        <li>Problem solving</li>
                                        <li>Object Oriented Programming</li>
                                    </ul>
                                </i>
                            </p>
                            <p className="font-bold text-black text-[15px] mb-2 mt-2">Soft Skills</p>
                            <p className="ml-2">
                                <i className="text-blue-600">
                                    <ul className="list-disc ml-4">
                                        <li>Great communication</li>
                                        <li>Excellent at working with others</li>
                                        <li>Rapidly learn new things</li>
                                    </ul>
                                </i>
                            </p>
                        </div>
                    </aside>
                </div>
            </div>
        </>
    );
}

export default Home;