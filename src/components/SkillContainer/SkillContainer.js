import React from "react";

function SkillContainer(props) {

    const hoverStyle = ["transition ease-in-out hover:scale-110 hover:bg-indigo-500/[0.40] duration-300"]

    return (
        <div className={["text-center m-3 rounded-md flex flex-col justify-center items-center bg-teal/[0.13]", hoverStyle].join(" ")}>
            <img className={["mt-5 3xl:mt-10 px-1 h-8 md:h-12 lg:h-18 3xl:h-20", props.classProps].join(" ")} src={props.imgSrc} alt="" />
            <h1 className="my-3 3xl:my-5 text-xs sm:text-md lg:text-lg 3xl:text-2xl">{props.skillName}</h1>
        </div>
    )
}

export default SkillContainer