import React from "react";
import Layout from "../Layout/Layout";
import NavBar from "../NavBar/NavBar"

function About() {
    return (
        <Layout content={
            <div className="text-white h-screen flex flex-col justify-center sm:col-span-4 md:col-span-3">
                <div className="container flex flex-1 mx-auto -mb-8 items-center justify-center">
                    <div className="leading-10 overflow-y-scroll m-4 min-h-0 drop-shadow-xl lg:max-w-32 xs:max-h-96 scrollbar">
                        <p className="p-2 text-offwhite">
                        <span className="text-4xl font-semibold decoration-solid"><h1 className="mb-4">ABOUT ME</h1></span>
                        <span className="text-2xl">Hello!</span> <br />I am Mark Donahue, a 24 year-old looking to get my foot in the door for a full-stack development role, but I am open to many offers including help desk, 
                        IT, web design and development, data analytics, and basically anything to keep my mind moving forward towards my goal. I've worked with computers my entire life 
                        (specifically Windows OS, although I do have an understanding on Linux and MacOS) and I'm looking for a place willing to help me learn along the way, as well as a place where I can show my skills within the 
                        computer science field.

                        My resume includes a laundry list of skillsets I have, so I won't include them in my summary. I love working with computers and I plan to work with technology for the rest of my life, so I am eager to start not just a job, but a career.
                        </p>
                    </div>    
                </div>
                <NavBar />
            </div>
        }/>
    );
}

export default About;