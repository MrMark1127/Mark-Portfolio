import React from "react";
import SocialButtons from "../SocialButtons/SocialButtons";
import {Link} from "react-router-dom"

function LeftSideBar(props) {
    //BORDER FOR SIDE BARS border-dashed border-2 border-black 
    return (
        <div className="text-white flex flex-col overflow-hidden hidden md:flex md:col-span-1">
            <p className="flex-1 mt-4 3xl:mt-12 font-DancingScript text-4xl lg:text-5xl 3xl:text-6xl"><Link to="/">Donahue Solutions</Link></p>
            <SocialButtons 
                socialNetwork="faGithub"
                borderRadius="hover:rounded-full"
            />
            <SocialButtons 
                socialNetwork="faLinkedin"
                borderRadius="hover:rounded-md"
            />
        </div>
    )
}

export default LeftSideBar;
