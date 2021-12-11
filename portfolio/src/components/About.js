import React, {useState} from "react";

function About (){

    return(<>
        <div id="about" className="About">
            <div className="information">
                I obtained my CS degree from California State University East Bay back in May of 2021.
                Currently I find myself learning more about web development by tackling challenges
                on FrontEndMentor and such. 
            </div>
            <div className="languages"> 
                <div className="cplusplus"> C++ </div>
                <div className="javascript"> JavaScript </div>
                <div className="sql"> SQL </div>
                <div className="node"> Node.js </div>
                <div className="react"> REACT.js </div>
            </div>
            <div className="interests">
                <ul> Some other things that peek my interest are: 
                    <li> Machine Learning </li>
                    <li> Physical Health </li>
                    <li> Day Trading </li>
                    <li> Outdoor Activities </li>
                </ul>
            </div>
        </div>
    </>);
}

export default About;