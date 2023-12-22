import React from 'react'


const Education = () => {
    return (
        
        <div id='education'>
            <center>
                <div className=' edu-head ' >
                    <img className='edu-hat' src={require('./images/education.png')} />
                    <h1 style={{ marginTop: "20px" }} ><b>My <span style={{ color: "#126a60" }} >Education</span></b></h1>
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
        </div>
    )
}

export default Education
