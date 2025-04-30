import { defaultIcons } from "../../helpers/HNav-icon"
import { Link } from 'react-router-dom'
import { useState } from "react"
import React from 'react'
/*
    This is footer navbar of the app
    including 5 icons that will navigate the user
    to other pages
*/
function Navbar() {
    // using state to set active icon to the current page
    const [activeIndex, setActiveIndex] = useState(0);

    const navLinks = [
        "/",
        "/Product",
        "/Invovice",
        "/Customer",
        "/Menu",
    ]


    return (
        <>
            <ul className="navbar w-full flex justify-around p-5 bg-[#F5FFFF] rounded-[30px]">
                {
                    navLinks.map((link, index) => {
                        // clone the svg to add more style when it is clicked
                        const styleIcon = React.cloneElement(defaultIcons[index], {
                            onClick: () => setActiveIndex(index),
                            style: {
                                color: activeIndex === index ? "#0093CB": "#6DD7FD"
                            },
                            className: "transition duration-300 ease-in-out hover:scale-120"
                        })

                        return (
                            <li className="nav-item" key={index}>
                                <Link to={link}>
                                    {styleIcon}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default Navbar
