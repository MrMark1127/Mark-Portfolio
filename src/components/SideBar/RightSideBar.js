import React from "react"
import {Link} from "react-router-dom"

function RightSideBar() {

    const resumeLink = "https://docs.google.com/document/d/1keXOwpNdOinJU9nO0jYr8RUpDORPyumpFxmytGsSh1A/edit?usp=sharing"

    return (
        <div className="text-white flex flex-col items-center overflow-hidden hidden sm:flex sm:col-span-1 md:col-span-1">
            <div className="flex-1 flex flex-col">
                <Link to="/contact"><button className="mt-4 px-2 py-1 border-solid border-2 border-teal rounded-sm hover:border-offwhite hover:text-teal sm:mr-2 md: 1xl:text-2xl 1xl: px-5 py-2">Contact Me</button></Link>
                <a href={resumeLink} target="_blank" rel="noopener noreferrer"><button className="mt-4 px-2 py-1 border-solid border-2 border-teal rounded-sm hover:border-offwhite hover:text-teal sm:mr-2 md: 1xl:text-2xl 1xl: px-5 py-2">Download CSV</button></a>
            </div>
            <p className="text-3xl md:text-4xl 3xl:text-5xl py-2 3xl:py-6 text-teal">&lt; <span className="text-vintage">Full Stack</span> /&gt;</p>
        </div>
    )
}

export default RightSideBar;