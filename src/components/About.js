import React from 'react'

const About = () => {
    return (
        <div id='about'>
            <div className='heading' ><h1><b>About <span style={{ color: "#126a60" }} >Me</span></b></h1></div>
            <div className='container d-flex flex-wrap'  >
                <div className='about-section' style={{ justifyContent: "center", textAlign: "center" }}>
                    <img src={require('./images/me.jpeg')} />
                </div>
                <div className='about-section'>
                    <h2>I'm Bhanu</h2>
                    <p><b>Full Stack Developer</b></p>
                    <p>
                        I am a Full-Stack developer based in Ajmer, India. I am an Information Technology undergraduate from Engineering College Ajmer. I am very passionate about improving my coding skills & developing applications & websites.
                    </p>
                    <p><span style={{ color: "#6a2615" }} >Email: </span> singh28986@gmail.com </p>
                    <p><span style={{ color: "#6a2615" }} >Place: </span> Ajmer, Rajasthan, India - 305001</p>
                </div>
            </div>
        </div>
    )
}

export default About
