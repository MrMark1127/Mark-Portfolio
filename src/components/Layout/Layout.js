import React from "react";
import LeftSideBar from "../SideBar/LeftSideBar";
import RightSideBar from "../SideBar/RightSideBar";

function Layout(props){
    return(
        <div className="2xl:container flex h-screen text-center grid bg-space-pattern bg-no-repeat bg-cover">
            <div className="flex grid h-screen text-center sm:grid-cols-5 bg-lightblack/[0.82]">
                <LeftSideBar />
                    {props.content}
                <RightSideBar />
            </div>
        </div>
    );    
}

export default Layout;