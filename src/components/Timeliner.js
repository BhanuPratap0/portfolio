import React from 'react'
import './timeliner.css'
import Fade from 'react-reveal/Fade';
const Timeliner = () => {
    return (
        <div id='exp'>
            <div className='edu-head ' >
                <img className='exp' src={require('./images/exp.png')} />
                <h1 style={{ marginTop: "20px" }} ><b>Experience</b></h1>
            </div>
            <section  class="design-section">
                <div class="timeline">
                    <div class="timeline-empty">
                    </div>
                    <div class="timeline-middle">
                        <div class="timeline-circle"></div>
                    </div>
                    <div class="timeline-component timeline-content">
                        <h3>MNIT Jaipur</h3>
                        <p className='role'>Full Stack Web Developer and R & D Intern</p>
                        <p className='date'>June 2023 - Aug 2023</p>
                    </div>

                    <div class="timeline-component timeline-content">
                        <h3>Hackathon: All India Forensic Hackathon</h3>
                        <p className='role'>Finalist in top 15 teams for final round.</p>
                        <p className='date'>Feb 2023</p>
                    </div>
                    <div class="timeline-middle">
                        <div class="timeline-circle"></div>
                    </div>
                    <div class="timeline-empty">
                    </div>

                    <div class="timeline-empty">
                    </div>

                    <div class="timeline-middle">
                        <div class="timeline-circle"></div>
                    </div>
                    <div class=" timeline-component timeline-content">
                        <h3>Technocracy Software Private Limited</h3>
                        <p className='role'>Full Stack Web Developer</p>
                        <p className='date'>Aug 2023-October 2023</p>
                    </div>

                </div>


                <div class="timeline">
                    <div class="timeline-component timeline-content">
                        <h3>Government Engineering College, Ajmer</h3>
                        <p className='role'>Full Stack Web Developer</p>
                        <p className='date'>Aug 2022 - Present</p>
                    </div>
                    <div class="timeline-middle">
                        <div class="timeline-circle"></div>
                    </div>
                    <div class="timeline-empty">
                    </div>

                    <div class="timeline-empty">
                    </div>

                    <div class="timeline-middle">
                        <div class="timeline-circle"></div>
                    </div>
                    <div class=" timeline-component timeline-content">
                        <h3>Government Engineering College, Ajmer (T & P)</h3>
                        <p className='role'>Full Stack Web Developer</p>
                        <p className='date'>Aug 2022 - Present</p>
                    </div>
                </div>
            </section >
        </div>
    )
}

export default Timeliner
