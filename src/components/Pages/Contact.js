import React from "react";
import NavBar from "../NavBar/NavBar";
import Layout from "../Layout/Layout";
import InputContainer from "../InputContainers/InputContainer";
import LargeInputContainer from "../InputContainers/LargeInput";

function Contact() {
    return (
        <Layout 
        title={"CONTACT ME"}
        content={
                    <div className="container m-2 bg-black/[0.14] rounded-md xs:w-5/6 md:w-1/2">
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
        }/>
    );
}

export default Contact