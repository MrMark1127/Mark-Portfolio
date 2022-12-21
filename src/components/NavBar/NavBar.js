import React from "react";
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

function NavBar() {
    React.useEffect(() => {
        let el = document.querySelector('#navBarSelector')
        el.classList.add("transition","ease-in-out","duration-1000", "opacity-100")
    }, [])

    const iconStyle = "xs:text-2xl text-4xl sm:text-4xl drop-shadow-lg text-teal hover:text-offwhite";
    return (
        <div id="navBarSelector" className="container flex mx-auto justify-center mb-4 overflow-hidden pt-2 lg:mt-4">
            <div className="bg-lightblack/[0.95] rounded-md py-2 px-10">
                <div className="xs:space-x-5 space-x-10 sm:space-x-9 flex flex-row">
                    <Link to="/">
                        <FontAwesomeIcon icon={solid("house")} className={iconStyle}/>
                        <p>
                            Home
                        </p>
                    </Link>
                    <Link to="/about">
                        <FontAwesomeIcon icon={solid("user")} className={iconStyle}/>
                        <p>
                            About
                        </p>
                    </Link>
                    <Link to="/skills">
                        <FontAwesomeIcon icon={solid("book")} className={iconStyle}/>
                        <p>
                            Skills
                        </p>
                    </Link>
                    <Link to="/projects">
                        <FontAwesomeIcon icon={solid("atom")} className={iconStyle}/>
                        <p>
                            Projects
                        </p>
                    </Link>
                    <Link to="/contact">
                        <FontAwesomeIcon icon={solid("paper-plane")} className={iconStyle}/>
                        <p>
                            Contact
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar;
