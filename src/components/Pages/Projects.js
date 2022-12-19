import React from "react";
import NavBar from "../NavBar/NavBar";
import Layout from "../Layout/Layout";
import ProjectContainer from "../ProjectContainer/ProjectContainer";

function Projects() {
    return (
        <Layout content={
            <div className="text-white h-screen flex flex-col justify-center sm:col-span-4 md:col-span-3">
            <h1 className="mt-12 md:mt-8 2xl:mt-24 3xl:mt-32 text-4xl font-semibold z-40">PROJECTS</h1>
            <h3 className="italic sm:px-4 z-30">This is a work in progress as I finalzie projects I had begun working on but haven't hosted yet.</h3>
                <div className="container flex flex-1 mx-auto -mt-22 2xl:-mt-32 3xl:-mt-38 -mb-8 items-center justify-center overflow-y-scroll scrollbar">
                    <div className="container m-16 h-3/4 grid sm:grid-cols-1 sm:grid-cols-2 grid-flow-row rounded-sm lg:mt-16 2xl:mt-28 m-4"> {/*ADD WHEN MORE THEN 2 PROJECTS LISTED. md:grid-cols-3 */}
                        <ProjectContainer 
                            imgSrc="https://i.imgur.com/Qq6rCmm.png"
                            skillName="Keeper App (Todo)"
                            anchorLink="#"
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
                </div>
                <NavBar />
            </div>
        }/>
    );
}

export default Projects