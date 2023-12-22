import React from 'react'
import { Link } from 'react-router-dom'
import './test.css'
import About from './About'
import Skills from './Skills'
import Education from './Education'
import Project from './Project'
import Fade from 'react-reveal/Fade';

const Home = () => {
  return (
    <>
      <div id="videowrapper">
        <div id="fullScreenDiv">
          <video autoPlay={true}
            loop={true}
            controls={false}
            playsInline
            muted
            src={require("./images/bg.mp4")}
            id="video" >
          </video>
          <div id="videoMessage" className="styling">
            <div className='d-flex flex-wrap' >
              <div className='front-section' >
                <h1>Hi There,<br />I'm Bhanu Pratap Singh</h1>
                <div className='social d-flex' >
                  <Link><img src={require('./images/git.png')} /></Link>
                  <Link><img src={require('./images/insta.png')} /></Link>
                  <Link><img src={require('./images/linkdin.png')} /></Link>
                </div>
              </div>
              <div className='front-section' >
                <img src={require('./images/profile.jpeg')} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <Fade bottom>
      <About/>
      </Fade>

      {/* Skills Section */}
      <Fade bottom>
      <Skills/>
      </Fade>


      {/* EDUCATION SECTION*/}
      <Fade bottom>
     <Education/>
     </Fade>

      {/* PROJECTS SECTION */}
      <Fade bottom>
      <Project/>

      </Fade>
    </>
  )
}

export default Home
