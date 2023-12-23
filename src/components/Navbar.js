import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/"><b>Bhanu</b></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon navbar-dark"></span>
                    </button>
                    <div class="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
                        <ul class="navbar-nav" >
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#videowrapper"><span 
                                className='mob-span'
                                data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse">Home</span><span className='web-span'>Home</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#about"><span 
                                className='mob-span'
                                data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse">About</span><span className='web-span'>About</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#skills"><span 
                                className='mob-span'
                                data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse">Skills</span><span className='web-span'>Skills</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#education"><span 
                                className='mob-span'
                                data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse">Education</span><span className='web-span'>Education</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#projects"><span 
                                className='mob-span'
                                data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse">Projects</span><span className='web-span'>Projects</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#exp"><span 
                                className='mob-span'
                                data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse">Experience</span><span className='web-span'>Experience</span></a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        )
}

export default Navbar
