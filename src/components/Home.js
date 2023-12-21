import React from 'react'
import { Link } from 'react-router-dom'
import './test.css'

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
                  <Link ><img src={require('./images/git.png')} /></Link>
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
        <div className='about-section' style={{ justifyContent: "center", textAlign: "center" }}>
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
      <div className='skills-parent' >
        <div className='heading' ><h1>Skills and Abilities</h1></div>
        <div className='container skills d-flex flex-wrap'>
          <div className='card skill-card' >
            <img src={require('./images/react.png')} />
            <p>React</p>
          </div>
          <div className='card skill-card' >
            <img src={require('./images/express.png')} />
            <p>ExpressJs</p>
          </div>
          <div className='card skill-card' >
            <img src={require('./images/html.png')} />
            <p>HTML</p>
          </div>
          <div className='card skill-card' >
            <img src={require('./images/css.png')} />
            <p>CSS</p>
          </div>
          <div className='card skill-card' >
            <img src={require('./images/php.png')} />
            <p>PHP</p>
          </div>

          <div className='card skill-card' >
            <img src={require('./images/node.png')} />
            <p>NodeJs</p>
          </div>
          <div className='card skill-card' >
            <img src={require('./images/botstrap.png')} />
            <p>Bootstrap</p>
          </div>
          <div className='card skill-card' >
            <img src={require('./images/js.png')} />
            <p>JavaScript</p>
          </div>
          <div className='card skill-card' >
            <img src={require('./images/chakra.png')} />
            <p>ChakraUI</p>
          </div>
          <div className='card skill-card' >
            <img src={require('./images/cpp.png')} />
            <p>C++</p>
          </div>
          <div className='card skill-card' >
            <img src={require('./images/mongodb.png')} />
            <p>MongoDB</p>
          </div>
          <div className='card skill-card' >
            <img src={require('./images/mysql.png')} />
            <p>MySQL</p>
          </div>
          <div className='card skill-card' >
            <img src={require('./images/git.png')} />
            <p>Git</p>
          </div>
          <div className='card skill-card' >
            <img src={require('./images/netlify.png')} />
            <p>Netlify</p>
          </div>
        </div>
      </div>

      {/* EDUCATION SECTION*/}

      <center>
        <div className='edu-head' >
          <img className='edu-hat' src={require('./images/education.png')} />
          <h1 style={{ marginTop: "20px" }} >My Education</h1>
        </div>
      </center>
      <div className='container education'>

        <div className='education-card'>
          <img src={require('./images/school.jpg')} />
          <div className='education-text' >
            <h3>Higher Secondary School</h3>
            <p>Demonstraion Multipurpose School</p>
            <h6>2008 - 2019 | Completed</h6>
          </div>
        </div>

        <div className='education-card'>
          <img src={require('./images/college.jpg')} />
          <div className='education-text' >
            <h3>Bachelors of Technology in Information Technology</h3>
            <p>Government Engineering College Ajmer</p>
            <h6>2020 - 2024 | Pursuing</h6>
          </div>
        </div>
      </div>


      {/* PROJECTS SECTION */}
      <div className='projects-body' >
        <div className='edu-head' >
          <img className='project-head' src={require('./images/projects.png')} />
          <h1 style={{ marginTop: "20px" }} >My Projects</h1>
        </div>
        <div className='projects'>
          

          <div class="containerx">
            <img src={require('./images/talk-a-tive.png')} alt="Avatar" class="image" />
              <div class="middle">
                <div class="text"><a href='https://talk-a-tive-ihk6.onrender.com' >Talk-A-Tive</a></div>
              </div>
          </div>
          <div class="containerx">
            <img src={require('./images/inotebook.PNG')} alt="Avatar" class="image" />
              <div class="middle">
                <div class="text"><a href='https://bhanu-inotebook.netlify.app/' >iNoteBook</a></div>
              </div>
          </div>
          <div class="containerx">
            <img src={require('./images/news.PNG')} alt="Avatar" class="image" />
              <div class="middle">
                <div class="text"><a href='https://newsmonkey-us.netlify.app/' >News Monkey-US</a></div>
              </div>
          </div>
          <div class="containerx">
            <img src={require('./images/text-util.png')} alt="Avatar" class="image" />
              <div class="middle">
                <div class="text"><a href='https://my-textutilapp.netlify.app/' >Text Utils</a></div>
                
              </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Home
