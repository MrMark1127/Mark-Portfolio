import React from "react";
import NavBar from "../NavBar/NavBar";
import Layout from "../Layout/Layout";
import SkillContainer from "../SkillContainer/SkillContainer";
import TailwindsCSS from "../../assets/svg-icons/tailwindcss-icon.svg"
import ReactLogo from "../../assets/svg-icons/react.svg"
import NodeJS from "../../assets/svg-icons/nodejs.svg"
import jQuery from "../../assets/svg-icons/jQuery_Logo.svg"
import CSS3 from "../../assets/svg-icons/css-3.svg"
import JavascriptLogo from "../../assets/svg-icons/javascript.svg"
import ExpressJS from "../../assets/svg-icons/express.svg"
import MongoDB from "../../assets/svg-icons/mongodb-icon.svg"
import PythonLogo from "../../assets/svg-icons/python.svg"
import Git from "../../assets/svg-icons/git-icon.svg"
import GithubIcon from "../../assets/svg-icons/github-icon.svg"
import FlaskIcon from "../../assets/svg-icons/flask.svg"
import BootstrapIcon from "../../assets/svg-icons/bootstrap.svg"
import MySQLIcon from "../../assets/svg-icons/mysql-icon.svg"
import HTMLIcon from "../../assets/svg-icons/html-5.svg"
import SASSIcon from "../../assets/svg-icons/sass.svg"
/*-mt-24 2xl:-mt-36 3xl:-mt-48*/
function Skills() {
    return (
        <Layout 
        title={"SKILLS"}
        content={   
            //  || container grid grid-cols-4 grid-flow-row rounded-sm mx-4 lg:mt-16 my-4
                    <div className="container grid grid-cols-4 gap-4 pr-2 rounded-md overflow-y-auto scrollbar">
                        <SkillContainer
                            imgSrc={JavascriptLogo}
                            skillName="Javascript"
                        />
                        <SkillContainer 
                            imgSrc={ReactLogo}
                            skillName="React"
                        />
                        <SkillContainer
                            imgSrc={NodeJS}
                            skillName="NodeJS"
                        />
                        
                        <SkillContainer
                            imgSrc={jQuery}
                            skillName="jQuery"
                        />
                        <SkillContainer
                            imgSrc={ExpressJS}
                            skillName="Express"
                        />
                        <SkillContainer
                            imgSrc={HTMLIcon}
                            skillName="HTML5"
                        />
                        <SkillContainer
                            imgSrc={CSS3}
                            skillName="CSS-3"
                        />
                        <SkillContainer
                            imgSrc={SASSIcon}
                            skillName="SASS"
                        />
                        <SkillContainer 
                            imgSrc={TailwindsCSS}
                            skillName="Tailwind CSS"
                        />
                        <SkillContainer
                            imgSrc={BootstrapIcon}
                            skillName="Bootstrap"
                        />
                        <SkillContainer
                            imgSrc={PythonLogo}
                            skillName="Python"
                        />
                        <SkillContainer
                            imgSrc={FlaskIcon}
                            skillName="Flask"
                        />
                        <SkillContainer
                            imgSrc={Git}
                            skillName="Git"
                        />
                        <SkillContainer
                            imgSrc={GithubIcon}
                            skillName="Github"
                        />
                        <SkillContainer
                            imgSrc={MySQLIcon}
                            skillName="MySQL"
                        />
                        <SkillContainer
                            imgSrc={MongoDB}
                            skillName="Mongo"
                        />
            </div>
        }/>
    );
}

export default Skills