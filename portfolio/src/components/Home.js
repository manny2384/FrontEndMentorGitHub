import React, {useState} from "react";
import me from '../pictures/profile.jpg';
import arrow from '../pictures/circle.svg';

function Home({updatePage}) {
    return(<> 
        <div id="home" className="Home">
            <div className="myname">
                <div className="mynameWall"> </div>
                Hello, My name is Emmanuel Gonzalez
            </div>

            <div className="nav_arrow">
                <a href="#projects"><img src={arrow} alt="navArrow" value="projects" onClick={updatePage} /></a>
            </div>
            <div className="outer_stars">
                <div className="set set1">
                    <span className="star"></span>
                    <span className="star"></span>
                    <span className="star"></span>
                    <span className="star"></span>
                    <span className="star"></span>
                </div>
                <div className="set set2">
                    <span className="star"></span>
                    <span className="star"></span>
                    <span className="star"></span>
                    <span className="star"></span>
                    <span className="star"></span>
                </div>
                <div className="set set3">
                    <span className="star"></span>
                    <span className="star"></span>
                    <span className="star"></span>
                    <span className="star"></span>
                    <span className="star"></span>
                </div>
            </div>
        </div>
    </>);   
}

export default Home;