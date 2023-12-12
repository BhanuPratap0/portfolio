import React from 'react'
import { Link } from 'react-router-dom'
import './test.css'

const Home = () => {
  return (
    <>
      {/* <div className='container home d-flex flex-wrap'  >
      <video loop muted autoPlay>
        <source src={require("./images/bg.mp4")} type="video/mp4"/>
      </video>
        <div className='front-section' >
          <h1>Hi There,<br />I'm Bhanu Pratap Singh</h1>
          <div className='social d-flex' >
          <Link><img src={require('./images/git.png')}/></Link>
          <Link><img src={require('./images/insta.png')}/></Link>
          <Link><img src={require('./images/linkdin.png')}/></Link>
          </div>
        </div>
        <div className='front-section' >
          <img src={require('./images/profile.jpg')} />
        </div>
      </div>
      <center><h1>About Me</h1></center>
      <div className='container d-flex flex-wrap'>
        <div className='about-section'>
          <img src={require('./images/me.jpeg')} />
        </div>
        <div className='about-section'></div>
      </div> */}



      <div id="videowrapper">
        <div id="fullScreenDiv">
          <video autoPlay loop muted id="video" >
            <source src={require("./images/bg.mp4")} type="video/webm" />
            <source src={require("./images/bg.mp4")} type="video/mp4" />
          </video>
          <div id="videoMessage" class="styling">
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
      <div className='heading' ><h1>About Me</h1></div>
      <div className='container d-flex flex-wrap'  >
        <div className='about-section' style={{justifyContent:"center",textAlign:"center"}}>
          <img src={require('./images/me.jpeg')} />
        </div>
        <div className='about-section'>
          <h2>I'm Bhanu</h2>
          <p><b>Full Stack Developer</b></p>
          <p>
            I am a Full-Stack developer based in Ajmer, India. I am an Information Technology undergraduate from Engineering College Ajmer. I am very passionate about improving my coding skills & developing applications & websites.
          </p>
          <b className='text-primary' >Email: </b> singh28986@gmail.com<br />
          <b className='text-primary' >Place: </b> Ajmer, Rajasthan, India - 305001
        </div>
      </div>
      {/* About Section End */}

      {/* Skills Section */}
      <div style={{backgroundColor:"#f0f0f7"}} >
      <div className='heading' ><h1>Skills and Abilities</h1></div>
      <div className='container skills d-flex flex-wrap'>
        <div className='card skill-card' >
          <img src={require('./images/html.png')} />
          <p>HTML</p>
        </div>
        <div className='card skill-card' >
          <img src={require('./images/css.png')} />
          <p>CSS</p>
        </div>
        <div className='card skill-card' >
          <img src={require('./images/react.png')} />
          <p>React</p>
        </div>
        <div className='card skill-card' >
          <img src={require('./images/php.png')} />
          <p>PHP</p>
        </div>
        <div className='card skill-card' >
          <img src={require('./images/express.png')} />
          <p>ExpressJs</p>
        </div>
      </div>
      </div>

    </>
  )
}

export default Home
