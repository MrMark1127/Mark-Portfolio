import React from "react";
import NavBar from "../NavBar/NavBar";
import Layout from "../Layout/Layout";
import ProjectContainer from "../ProjectContainer/ProjectContainer";

function Projects() {
    return (
        <Layout 
        title={"PROJECTS"}
        content={
            <div className="container grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pr-2 rounded-md overflow-y-auto scrollbar"> {/*ADD WHEN MORE THEN 2 PROJECTS LISTED. md:grid-cols-3 */}
                <ProjectContainer 
                    imgSrc="https://i.imgur.com/Qq6rCmm.png"
                    skillName="Keeper App (Todo)"
                    anchorLink="https://mrmark1127.github.io/keeper-app/"
                />
                <ProjectContainer 
                    imgSrc="https://i.imgur.com/kJuwk4F.png"
                    skillName="Simon Game"
                    anchorLink="https://mrmark1127.github.io/Simon-Game/"
                />
                <ProjectContainer 
                    imgSrc="https://i.imgur.com/PBBjL1Z.png" //"https://i.imgur.com/AJp9KL7.png"
                    skillName="Drum Kit"
                    anchorLink="https://mrmark1127.github.io/Drum-Kit/"
                />
            </div>
        }/>
    );
}

export default Projects