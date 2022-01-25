import React from 'react';
import chhavi1 from "../images/Chhavi1.jpg"
import chhavi2 from "../images/Chhavi2.jpg"
import chhavi3 from "../images/Chhavi3.jpg"
import chhavi4 from "../images/Chhavi4.jpg"

function Projects() {
    return (
        <section id="projectss">
            <div className="projects">
                <h1 id="work">Work</h1>
                <div className="projecttitle">
                    <h1>Some of my Pictures.</h1>
                </div>
                <div className="cards">
                    <div className="card" style={{
                        backgroundImage : `url(${chhavi1})`
                    }}>
                        <div className="dot"></div>
                        <div className="card-body">
                        <h5 className="card-title">Look How stupid I am</h5>
                        <p className="card-text"></p>
                        {/* <a target="_blank" rel="noreferrer" href="https://github.com/MadhanDevlpr/weatherapp-js"><button type="button" className="btn btn-primary">View on Github</button></a> */}
                        </div>
                    </div>
                    <div className="card"
                    style={{
                        backgroundImage : `url(${chhavi2})`
                    }}>
                        <div className="dot"></div>
                        <div className="card-body">
                        <h5 className="card-title">Always Have Been</h5>
                        {/* <p className="card-text">This is a very common project made with javascript but I've made some awesome stylings and animations.</p> */}
                        {/* <a target="_blank" rel="noreferrer" href="https://github.com/MadhanDevlpr/Js-Clock"><button type="button" className="btn btn-primary">View on Github</button></a> */}
                        </div>
                    </div>
                    <div className="card" style={{
                        backgroundImage : `url(${chhavi3})`
                    }}>
                        <div className="dot"></div>
                        <div className="card-body">
                        <h5 className="card-title">Can Get Drunk Sometimes</h5>
                        {/* <p className="card-text">This is a open source project which can be cloned and edited as per your wish to upgrade your old portfolios and make it fabulous.</p>
                        <a target="_blank" rel="noreferrer" href="https://github.com/MadhanDevlpr/fabulousfolio"><button type="button" className="btn btn-primary">View on Github</button></a> */}
                        </div>
                    </div>
                    <div className="card" style={{
                        backgroundImage : `url(${chhavi4})`
                    }}>
                        <div className="dot"></div>
                        <div className="card-body">
                        <h5 className="card-title">Sometimes</h5>
                        {/* <p className="card-text">This is a open source project which can be cloned and edited as per your wish to upgrade your old portfolios and make it fabulous.</p>
                        <a target="_blank" rel="noreferrer" href="https://github.com/MadhanDevlpr/fabulousfolio"><button type="button" className="btn btn-primary">View on Github</button></a> */}
                        </div>
                    </div>
                    {/* <div  className="card" >
                        <div className="dot"></div>
                        <div className="card-body">
                        <h5 className="card-title">Snake Game</h5>
                        <p className="card-text">I've made this with tkinter and python just for learning more complex tuples and lists so that it may help in more in scrapping.</p>
                        <a target="_blank" rel="noreferrer" href="https://github.com/MadhanDevlpr/snake-game"><button type="button" className="btn btn-primary">View on Github</button></a>
                        </div>
                    </div>
                    <div className="card" >
                        <div className="dot"></div>
                        <div className="card-body">
                        <h5 className="card-title">Terminal Quiz</h5>
                        <p className="card-text">This project was made when I started learning python's basics, this project will run all through the terminal.</p>
                        <a target="_blank" rel="noreferrer" href="https://github.com/MadhanDevlpr/GK-QUIZ"><button type="button" className="btn btn-primary">View on Github</button></a>
                        </div>
                    </div>
                    <div  className="card" >
                        <div className="dot"></div>
                        <div className="card-body">
                        <h5 className="card-title">Jarvis</h5>
                        <p className="card-text">I've made this project when I was good in the basics and this doesn't have neural networks, this is just a model of Artificial Intelligence.</p>
                        <a target="_blank" rel="noreferrer" href="https://github.com/MadhanDevlpr/Jarvis"><button type="button" className="btn btn-primary">View on Github</button></a>
                        </div>
                    </div>
                    <div className="card" >
                        <div className="dot"></div>
                        <div className="card-body">
                        <h5 className="card-title">Background Generator</h5>
                        <p className="card-text">You can get the linear gradient background code s in this project and this is useful for Front-end Developers.</p>
                        <a target="_blank" rel="noreferrer" href="https://github.com/MadhanDevlpr/Background-Generator"><button type="button" className="btn btn-primary">View on Github</button></a>
                        </div>
                    </div>
                    <div  className="card" >
                        <div className="dot"></div>
                        <div className="card-body">
                        <h5 className="card-title">GUI Clock</h5>
                        <p className="card-text">This project was made just to practice my tkinter skills in python, and the main point is it will show the time.</p>
                        <a target="_blank" rel="noreferrer" href="https://github.com/MadhanDevlpr/GUI-CLOCK"><button type="button" className="btn btn-primary">View on Github</button></a>
                        </div>
                    </div>
                    <div className="card" >
                        <div className="dot"></div>
                        <div className="card-body">
                        <h5 className="card-title">Text to Speech</h5>
                        <p className="card-text">There have been lots of Graphical text to speech programs, but this is based on the terminal.</p>
                        <a target="_blank" rel="noreferrer" href="https://github.com/MadhanDevlpr/tts"><button type="button" className="btn btn-primary">View on Github</button></a>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default Projects
