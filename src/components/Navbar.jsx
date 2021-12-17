import React from 'react';
function Navbar() {
  function openNav() {
    document.getElementById("mySidenav").style.left= "50%";
    document.getElementsByClassName('toggle-btn')[0].style.opacity = "0"
    document.getElementsByTagName("html")[0].style.overflowY ="hidden";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.left = "150%";
    document.getElementsByClassName('toggle-btn')[0].style.opacity = "1"
    document.getElementsByTagName("html")[0].style.overflowY ="scroll";
  }
    return (
        <div>
          <svg onClick={openNav} className="toggle-btn" viewBox="0 0 100 80" width="35" height="35">
            <rect rx="10px" ry="10px" y="5" width="100" height="10"></rect>
            <rect rx="10px" ry="10px" y="35" width="80" height="10"></rect>
            <rect rx="10px" ry="10px" y="65" width="100" height="10"></rect>
          </svg>
            <div id="mySidenav" onClick={closeNav}  className="sidenav">
              <h2>Navigation.</h2>
            <div className="wrap">
              <span>Links</span>
                <a target="_blank" rel="noreferrer" href="https://github.com/MadhanDevlpr">
                    <i className="fab fa-github"></i>&nbsp;Github
                </a><br />
                <a target="_blank" rel="noreferrer" href="https://codepen.io/madhanaadithya">
                    <i className="fab fa-codepen"></i>&nbsp;Codepen
                </a>
            </div>
              <div className="links">
                <a className="item"  onClick={closeNav}     href="#header">home</a>
                <a className="item"  onClick={closeNav}     href="#projectss">Projects</a>
                <a className="item"  onClick={closeNav}     href="#about">About</a>
                <a className="item"  onClick={closeNav}     href="#skills">Skills</a>
                <a className="item"  onClick={closeNav}     href="#feedback">Feedback</a>
              </div>
              <p>Click any where to close</p>
            </div>
        </div>
    )
}

export default Navbar
