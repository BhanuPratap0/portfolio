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
                                <label for="close-btn" className="btn close-btn"><i className="fas fa-times"></i></label>
                                <li><Link href="#">Home</Link></li>
                                <li><Link href="#">About</Link></li>
                                <li>
                                    <Link href="#" className="desktop-item">Dropdown Menu</Link>
                                    <input type="checkbox" id="showDrop"/>
                                        <label for="showDrop" className="mobile-item">Dropdown Menu</label>
                                        <ul className="drop-menu">
                                            <li><Link href="#">Drop menu 1</Link></li>
                                            <li><Link href="#">Drop menu 2</Link></li>
                                            <li><Link href="#">Drop menu 3</Link></li>
                                            <li><Link href="#">Drop menu 4</Link></li>
                                        </ul>
                                </li>
                                <li>
                                    <Link href="#" className="desktop-item">Mega Menu</Link>
                                    <input type="checkbox" id="showMega"/>
                                        <label for="showMega" className="mobile-item">Mega Menu</label>
                                        <div className="mega-box">
                                            <div className="content">
                                                <div className="row">
                                                    <img src="https://fadzrinmadu.github.io/hosted-assets/responsive-mega-menu-and-dropdown-menu-using-only-html-and-css/img.jpg" alt=""/>
                                                </div>
                                                <div className="row">
                                                    <header>Design Services</header>
                                                    <ul className="mega-links">
                                                        <li><Link href="#">Graphics</Link></li>
                                                        <li><Link href="#">Vectors</Link></li>
                                                        <li><Link href="#">Business cards</Link></li>
                                                        <li><Link href="#">Custom logo</Link></li>
                                                    </ul>
                                                </div>
                                                <div className="row">
                                                    <header>Email Services</header>
                                                    <ul className="mega-links">
                                                        <li><Link href="#">Personal Email</Link></li>
                                                        <li><Link href="#">Business Email</Link></li>
                                                        <li><Link href="#">Mobile Email</Link></li>
                                                        <li><Link href="#">Web Marketing</Link></li>
                                                    </ul>
                                                </div>
                                                <div className="row">
                                                    <header>Security services</header>
                                                    <ul className="mega-links">
                                                        <li><Link href="#">Site Seal</Link></li>
                                                        <li><Link href="#">VPS Hosting</Link></li>
                                                        <li><Link href="#">Privacy Seal</Link></li>
                                                        <li><Link href="#">Website design</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                </li>
                                <li><Link href="#">Connect</Link></li>
                            </ul>
                            <label for="menu-btn" className="btn menu-btn"><i className="fas fa-bars"></i></label>
                        </div>
                    </nav>
                </>
                )
}

                export default Navbar
