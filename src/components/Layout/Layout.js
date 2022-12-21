import React from "react";
import LeftSideBar from "../SideBar/LeftSideBar";
import RightSideBar from "../SideBar/RightSideBar";
import NavBar from "../NavBar/NavBar";

function Layout(props){
    return(
        <div className="2xl:container flex h-screen text-center grid bg-space-pattern bg-no-repeat bg-cover">
            <div className="flex grid h-screen text-center sm:grid-cols-5 bg-lightblack/[0.82]">
                <LeftSideBar />
                    <div className="text-white h-screen flex flex-col justify-center sm:col-span-4 md:col-span-3 pt-40">
                        <h1 className="text-4xl font-semibold z-40">{props.title}</h1>
                        <div className="container flex flex-1 flex-col mx-auto p-4 items-center justify-center overflow-y-auto scrollbar lg:h-1/2">
                            {props.content}
                        </div>
                        <NavBar />
                    </div>
                <RightSideBar />
            </div>
        </div>
    );    
}

export default Layout;

{//            <h3 className="italic sm:px-4 z-30">This is a work in progress as I finalzie projects I had begun working on but haven't hosted yet.</h3>
}