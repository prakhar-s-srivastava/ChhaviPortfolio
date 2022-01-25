import React from "react";
import pi from "../images/pic.png"

const Header = () =>{
    return (
        <section id="header">

            <h1>Making it easy by<br/><span className="glow">Designing</span></h1>
            <h3>I Love Gossip, and beware my  ears are everywhere
                {/* <code>Python, Html, Css, Sass, Javacript</code> */}
                ,
                the tools I use are
            <code>Figma, Photoshop, Illustrator, Blender</code></h3>
            <div className="circle-container">
                <div className="circle"></div>
                <img src={pi}
                    style={{
                        transform: "rotate(30deg)",
                        objectFit: "cover",
                        overflow: "hidden",
                        borderRadius:"100%"
                }}
                ></img>
            </div>
        </section>
    )
}
export default Header
