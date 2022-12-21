import React from "react";
import Layout from "../Layout/Layout";
import NavBar from "../NavBar/NavBar"

function About() {
    return (
        <Layout
        title="ABOUT ME"
        content={
            <div className="leading-10 overflow-y-scroll m-1 min-h-0 lg:max-w-32 xs:max-h-96 scrollbar p-4">
                <p className="text-offwhite">
                <span className="text-2xl">Hello!</span> <br />I am Mark Donahue, a 24 year-old looking to get my foot in the door for a full-stack development role, but I am open to many offers including help desk, 
                IT, web design and development, data analytics, and basically anything to keep my mind moving forward towards my goal. I've worked with computers my entire life 
                (specifically Windows OS, although I do have an understanding on Linux and MacOS) and I'm looking for a place willing to help me learn along the way, as well as a place where I can show my skills within the 
                computer science field.

                My resume includes a laundry list of skillsets I have, so I won't include them in my summary. I love working with computers and I plan to work with technology for the rest of my life, so I am eager to start not just a job, but a career.
                </p>
            </div>    

        }/>
    );
}

export default About;