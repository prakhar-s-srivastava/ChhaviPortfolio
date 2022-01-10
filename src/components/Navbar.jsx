import React from 'react';
import logo from '../images/logo.png'
function Navbar() {
  function scrollNav(){
    if(window.innerWidth >=900){
      if (window.scrollY >= 60 ){
        document.getElementById('nav').style.opacity = "1";
      }
      else{
        document.getElementById('nav').style.opacity = "1";
      }
    }
    else{
      document.getElementById('nav').style.opacity = "1";
    }
  }
  window.addEventListener('resize',scrollNav)
  window.addEventListener('scroll',scrollNav)
  window.addEventListener('load',scrollNav)

    return (
        <div>
          <nav id="nav" className="navbar fixed-top p-0 navbar-expand-lg navbar-light">
              <a className="navbar-brand p-4" href="#header">
              <img src={logo} width="30" height="30" alt=""/>
              </a>
              <button className="navbar-toggler m-4 p-1" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <svg className="toggler bi bi-list" xmlns="http://www.w3.org/2000/svg" fill='#fff' width="30" height="30" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
              </svg>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <li className='nav-object'>
                    <a className="item" href="#header">home <span className="sr-only">(current)</span></a>
                  </li>
                  <li className='nav-object'>
                    <a className="item" href="#projectss">projects</a>
                  </li>
                  <li className='nav-object'>
                    <a className="item" href="#about">about</a>
                  </li>
                  <li className='nav-object'>
                    <a className="item" href="#skills">skills</a>
                  </li>
                  <li className='nav-object'>
                    <a className="item" href="#feedback">feedback</a>
                  </li>
                  <li className="nav-object dropdown">
                    <a className="item dropdown-toggle" href="#links" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      links
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a className="dropdown-item" target="_blank" rel="noreferrer" href="https://github.com/MadhanDevlpr">github</a>
                      <a className="dropdown-item" target="_blank" rel="noreferrer" href="https://codepen.io/madhanaadithya">codepen</a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" target="_blank" rel="noreferrer" href="https://cssbattle.dev/player/madhandev">cssbattle.dev</a>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
        </div>
    )
}

export default Navbar
