import React from 'react'
import { Link } from 'react-router-dom'
import './test.css'
import About from './About'
import Skills from './Skills'
import Education from './Education'
import Project from './Project'
import Fade from 'react-reveal/Fade';
import Timeliner from './Timeliner'
import Form from './Form'
import Typed from 'react-typed'

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
                <h5>
                  I am into&nbsp;
                  <span className='typing-text' >
                    <Typed
                      strings={[
                        "Full stack Development",
                        "Web Designing",
                        "Web Development",
                        "Frontend Development",
                        "Backend Development",

                      ]}
                      typeSpeed={100}
                      backSpeed={20}
                      loop
                    />
                  </span>
                </h5>
                <div className='social d-flex' >
                  <a href='https://github.com/BhanuPratap0' target='_blank' ><img src={require('./images/git.png')} /></a>
                  <a href='https://www.instagram.com/_iambhanu/' target='_blank'><img src={require('./images/insta.png')} /></a>
                  <a href='https://www.linkedin.com/in/bhaanu-p/' target='_blank'><img src={require('./images/linkdin.png')} /></a>
                  <a href='https://twitter.com/bunny28986' target='_blank'><img style={{borderRadius:"5px"}} src={require('./images/x.png')} /></a>
                </div>
              </div>
              <div className='front-section' >
                <img src={require('./images/avatar.PNG')} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <Fade bottom>
        <About />
      </Fade>

      {/* Skills Section */}
      <Fade bottom>
        <Skills />
      </Fade>


      {/* EDUCATION SECTION*/}
      <Fade bottom>
        <Education />
      </Fade>

      {/* PROJECTS SECTION */}
      <Fade bottom>
        <Project />
      </Fade>

      <Fade bottom>
        <Timeliner />
      </Fade>

      <Fade bottom>
        <Form />
      </Fade>
    </>
  )
}

export default Home
