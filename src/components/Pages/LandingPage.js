import React from "react";
import Layout from "../Layout/Layout";
import NavBar from "../NavBar/NavBar"

function LandingPage() {
    return (
        <Layout 
        title={""}
        content={
            <div>
                <p className="leading-10 text-2xl bg-teal/[0.10] px-4 py-2 rounded-md border border-indigo-200/[0.15] xl:text-4xl xl:leading-[3.2rem]">Hello and welcome!<br /> 
                My name is <span className="text-teal text-2xl xl:text-4xl font-semibold">Mark Donahue</span>
                <br />I am a <span className="text-teal text-2xl xl:text-4xl font-semibold">Full Stack</span> web developer,<br /> feel free to have a look around!
                </p>
                <button className="mt-4 px-5 py-2 border-solid border-2 border-teal rounded-sm hover:border-offwhite hover:text-teal sm:hidden">Download CSV</button>
            </div>
        }/>
    );
}

export default LandingPage;