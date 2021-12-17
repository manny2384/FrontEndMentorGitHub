import React, {useState} from "react";
import github from "../pictures/github.svg";
import linkedin from "../pictures/linkedin.svg";
import twitter from "../pictures/twitter.svg";

function Contact (){

    return(<>
        <div id="contact" className="Contact">

            <form className='gform' action='https://script.google.com/macros/s/AKfycbzLkPAJblQlzIUNCODCCsihh0BbH0WGdXoA6Rpy/exec' method='POST'>

                <input type="text" name="name" placeholder="First Name..."></input>
                <input type="text" name="color" placeholder="Last Name..."></input>
                <input type="email" name="email" placeholder="Email..."></input>
                <textarea type="text" name="message" placeholder="Description..."></textarea>
                <input id="submitbtn" name='submit' value='Send Email' type='submit'></input>

            </form>

            <div className="socialMedia">
                <span><a href="https://github.com/manny2384/manny2384/blob/main/README.md" target="_blank"><img src={github} alt="github" /></a></span>
                <span><a href="https://www.linkedin.com/in/emmanuel-gonzalez-05ab82193" target="_blank"><img src={linkedin} alt="linkedin" /></a></span>
                <span><a href="" target="_blank"><img src={twitter} alt="twitter" /></a></span>
            </div>
        </div>
    </>);
}

export default Contact;