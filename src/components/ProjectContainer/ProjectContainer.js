import React from "react";

function ProjectContainer(props) {

    const hoverStyle = ["transition ease-in-out hover:scale-105 hover:bg-indigo-500/[0.40] duration-300"]

    return (
        
            <div className={["text-center m-3 p-2 rounded-md flex flex-col justify-center items-center bg-teal/[0.13]", hoverStyle].join(" ")}>
            <a className="h-3/4 pb-2" target="_blank" rel="noopener noreferrer" href={props.anchorLink}>
                    <img className={["mt-3 3xl:mt-10 px-1 3xl:h-64 rounded-sm drop-shadow-xl", props.classProps].join(" ")} src={props.imgSrc} alt="" /></a>
                    <h1 className="my-3 3xl:my-5 text-xs sm:text-md lg:text-lg 3xl:text-2xl">{props.skillName}</h1>
            </div>
    )
}

export default ProjectContainer 