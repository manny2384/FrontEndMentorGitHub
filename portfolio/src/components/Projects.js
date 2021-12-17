import React, {useEffect, useState} from "react";

function Projects (){

    const [proj, setProj] = useState("proj1");
    useEffect(()=>{
        console.log("re-rendering");
    }, [proj]);



    return(<>
        <div id="projects" className="Projects">
                
            <div className="projectsInner">
                
                <div id='proj1' className="project">

                </div>
                <div id='proj2' className="project">
                    
                </div>
                <div id='proj3' className="project">

                </div>
                <div id='proj4' className="projet">

                </div>
        
            </div>
        </div>
    </>);
}

export default Projects;