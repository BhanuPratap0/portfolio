import React from 'react'

const Skills = () => {
    return (
        <div id='skills'>
            <div className='skills-parent' >
                <div className='heading' ><h1><b>Skills and <span style={{ color: "#126a60" }}>Abilities</span></b></h1></div>
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
        </div>
    )
}

export default Skills
