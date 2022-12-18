import React from "react"

function RightSideBar() {
    return (
        <div className="text-white flex flex-col items-center overflow-hidden hidden sm:flex sm:col-span-1 md:col-span-1">
            <div className="flex-1 flex flex-col">
                <button className="mt-4 px-2 py-1 border-solid border-2 border-teal rounded-sm hover:border-offwhite hover:text-teal sm:mr-2 md: 1xl:text-2xl 1xl: px-5 py-2">Contact Me</button>
                <button className="mt-4 px-2 py-1 border-solid border-2 border-teal rounded-sm hover:border-offwhite hover:text-teal sm:mr-2 md: 1xl:text-2xl 1xl: px-5 py-2">Download CSV</button>
            </div>
            <p className="text-3xl md:text-4xl 3xl:text-5xl py-2 3xl:py-6 text-teal">&lt; <span className="text-vintage">Full Stack</span> /&gt;</p>
        </div>
    )
}

export default RightSideBar;