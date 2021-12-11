import React, {useState} from "react";
import me from '../pictures/profile.jpg';
import arrow from '../pictures/circle.svg';

function Home() {
    return(<> 
        <div id="home" className="Home">
            <div className="myname">
                <div className="mynameWall"> </div>
                Hello, My name is Emmanuel Gonzalez
            </div>
            <div className="me">
                <img id="me" src={me} alt="Profile Picture" />
            </div>
            <div className="nav_arrow">
                <a href="#projects"><img src={arrow} alt="navArrow" /></a>
            </div>
            <div className="outer_stars">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </>);   
}

export default Home;