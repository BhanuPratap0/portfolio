import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
   
    return (
        <>
            <nav>
                <div className="wrapper">
                    <div className="logo"><Link href="#">Bhanu</Link></div>
                    <input type="radio" name="slider" id="menu-btn"/>
                        <input type="radio" name="slider" id="close-btn"/>
                            <ul className="nav-links">
                                <label htmlFor="close-btn" className="btn close-btn"><i className="fas fa-times"></i></label>
                                <li><a href="#videowrapper">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#skills">Skills</a></li>
                                <li><a href="#education">Education</a></li>
                                <li><a href='#projects'>Projects</a></li>
                                <li><a href='#exp'>Experience</a></li>
                            </ul>
                            <label htmlFor="menu-btn" className="btn menu-btn"><i className="fas fa-bars"></i></label>
                        </div>
                    </nav>
                </>
                )
}

                export default Navbar
