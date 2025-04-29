import { defaultIcons } from "../../helpers/HNav-icon"
import { boldIcons } from "../../helpers/HNav-icon"
import { Link } from 'react-router-dom'
import { useState } from "react"

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


    const handleClikec = (index: number) => {
        setActiveIndex(index)
    }

    return (
        <>
            <ul className="navbar w-full flex justify-around p-5 bg-black rounded-[30px]">
                {
                    navLinks.map((link, index) => (
                        <li className="nav-item" key={index}>
                            <Link to={link}>
                                {/* check the clicked img is based on which bold icon */}
                                <img className="w-[25px] h-[25px]" 
                                    src = {activeIndex === index ? boldIcons[index].src : defaultIcons[index].src} 
                                    alt = {activeIndex === index ? boldIcons[index].alt : defaultIcons[index].alt} 
                                    onClick={() => handleClikec(index)}
                                    />
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default Navbar
