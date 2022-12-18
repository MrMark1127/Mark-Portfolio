import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const GitHubURL = "https://github.com/MrMark1127"
const LinkedInURL = "https://www.linkedin.com/in/mark-donahue-734665201/"

function SocialButtons(props) {
    return (
        <div>
           <a href={props.socialNetwork === "faGithub" ? GitHubURL : LinkedInURL}><FontAwesomeIcon icon={props.socialNetwork === "faGithub" ? faGithub : faLinkedin} className="text-5xl py-2 text-teal hover:text-offwhite transition ease-in-out delay-135 hover:scale-105 duration-150"/></a> 
        </div>
    )
}

export default SocialButtons