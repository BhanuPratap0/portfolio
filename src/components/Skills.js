/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const Skills = () => {
  return (
    <div id="skills">
      <div className="skills-parent">
        <center>
          <div className=" edu-head ">
            <img className="edu-hat" src={require("./images/skills.png")} />
            <h1 style={{ marginTop: "20px" }}>
              <b>
                Skills & <span style={{ color: "#126a60" }}>Abilities</span>
              </b>
            </h1>
          </div>
        </center>
        <div className="container skills d-flex flex-wrap">
          <div className="card skill-card">
            <a
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
              className="skill-img"
              href="https://react.dev/"
            >
              <img src={require("./images/react.png")} />
              <p>React</p>
            </a>
          </div>
          {/* <div className='card skill-card' >
                        <img src={require('./images/nextjs.png')} />
                        <p>Next</p>
                    </div> */}
          {/* <div className='card skill-card' >
                        <img src={require('./images/tailwind.png')} />
                        <p>Tailwind CSS</p>
                    </div> */}
          <div className="card skill-card">
            <a
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
              className="skill-img"
              href="https://expressjs.com/"
            >
              <img src={require("./images/express.png")} />
              <p>ExpressJs</p>
            </a>
          </div>
          <div className="card skill-card">
            <a
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
              className="skill-img"
              href="https://developer.mozilla.org/en-US/docs/Web/HTML"
            >
              <img src={require("./images/html.png")} />
              <p>HTML</p>
            </a>
          </div>
          <div className="card skill-card">
            <img src={require("./images/css.png")} />
            <p>CSS</p>
          </div>
          <div className="card skill-card">
            <img src={require("./images/php.png")} />
            <p>PHP</p>
          </div>

          <div className="card skill-card">
            <a
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
              className="skill-img"
              href="https://nodejs.org/en"
            >
              <img src={require("./images/node.png")} />
              <p>NodeJs</p>
            </a>
          </div>
          <div className="card skill-card">
            <a
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
              className="skill-img"
              href="https://getbootstrap.com/"
            >
              <img src={require("./images/botstrap.png")} />
              <p>Bootstrap</p>
            </a>
          </div>
          <div className="card skill-card">
            <a
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
              className="skill-img"
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            >
              <img src={require("./images/js.png")} />
              <p>JavaScript</p>
            </a>
          </div>
          <div className="card skill-card">
            <a
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
              className="skill-img"
              href="https://chakra-ui.com/"
            >
              <img src={require("./images/chakra.png")} />
              <p>ChakraUI</p>
            </a>
          </div>
          <div className="card skill-card">
            <img src={require("./images/cpp.png")} />
            <p>C++</p>
          </div>
          <div className="card skill-card">
            <img src={require("./images/mongodb.png")} />
            <p>MongoDB</p>
          </div>
          <div className="card skill-card">
            <img src={require("./images/mysql.png")} />
            <p>MySQL</p>
          </div>
          <div className="card skill-card">
            <img src={require("./images/git.png")} />
            <p>Git</p>
          </div>
          <div className="card skill-card">
            <img src={require("./images/netlify.png")} />
            <p>Netlify</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
