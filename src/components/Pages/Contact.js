import React from "react";
import NavBar from "../NavBar/NavBar";
import Layout from "../Layout/Layout";
import InputContainer from "../InputContainers/InputContainer";
import LargeInputContainer from "../InputContainers/LargeInput";

function Contact() {
    return (
        <Layout content={
            <div className="text-white h-screen flex flex-col justify-center sm:col-span-4 md:col-span-3">
            {/* <h1 className="mt-12 md:mt-8 1xl:mt- 2xl:mt-[9rem] 3xl:mt-[21rem] text-4xl 3xl:text-6xl font-semibold">CONTACT</h1> */}
                <div className="container flex flex-1 mx-auto items-center justify-center">
                    <div className="container m-2 bg-black/[0.14] h-1/2 w-3/4 rounded-md sm:w-3/5 md:w-4/5 lg:w-1/2 xl:w-2/5 1xl:w-1/3 3xl:h-2/5">
                        <form>
                            <div className="grid gap-6 mb-6 px-8 mt-8 max-w-75vh">
                                <InputContainer
                                    key="1" 
                                    labelName="first_name"
                                    labelText="First Name"
                                    labelType="text"
                                    placeholderText="John"
                                />
                                <InputContainer
                                    key="2" 
                                    labelName="last_name"
                                    labelText="Last Name"
                                    labelType="text"
                                    placeholderText="Doe"
                                />
                                <InputContainer
                                    key="3" 
                                    labelName="email"
                                    labelText="Email"
                                    labelType="text"
                                    placeholderText="email@mail.com"
                                />
                                <LargeInputContainer
                                    key="4" 
                                    labelName="comment-input"
                                    labelText="Comments"
                                    labelType="text"
                                    placeholderText="Any comments or suggestions"
                                />
                            </div>
                        </form>
                    </div>
                </div>
                <NavBar />
            </div>
        }/>
    );
}

export default Contact