import React from "react";

function ProjectContainer(props) {

    const hoverStyle = ["transition ease-in-out hover:scale-101 hover:bg-indigo-500/[0.40] duration-300"]
        // className="container max-h-40 grid sm:grid-cols-1 sm:grid-cols-2 grid-flow-row rounded-sm lg:mt-16 2xl:mt-28 m-4"
    return (
        <div className={["bg-teal/[0.13] p-4 rounded-sm", hoverStyle].join(" ")}>
                <a target="_blank" rel="noopener noreferrer" href={props.anchorLink}>
                        <img className={["mt-3 3xl:mt-10 px-1 3xl:h-64 rounded-sm drop-shadow-xl", props.classProps].join(" ")} src={props.imgSrc} alt="" />
                        <h1 className="my-3 pt-4 text-xl sm:text-md lg:text-lg 3xl:text-2xl 3xl:my-5 ">{props.skillName}</h1>
                </a>
        </div>
    )
}

export default ProjectContainer 

{/* <div className={["text-center m-3 p-2 rounded-md flex flex-col justify-center items-center bg-teal/[0.13]", hoverStyle].join(" ")}>
        <a className="h-3/4 pb-2" target="_blank" rel="noopener noreferrer" href={props.anchorLink}>
                <img className={["mt-3 3xl:mt-10 px-1 3xl:h-64 rounded-sm drop-shadow-xl", props.classProps].join(" ")} src={props.imgSrc} alt="" />
        </a>
                <h1 className="my-3 pt-4 text-xl sm:text-md lg:text-lg 3xl:text-2xl 3xl:my-5 ">{props.skillName}</h1>
</div> */}