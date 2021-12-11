import React, {useEffect, useState} from 'react';

function Menu() {

    const [showMenu, setShowMenu] = useState(true);
    useEffect(()=>{
      console.log("re-rendering");
    }, [showMenu]);

    let last_section = "#home_icon";


    let exitMenu = () => {
      if(!showMenu){
        document.getElementsByClassName("menu_outer")[0].style.display = "none";
        document.getElementsByClassName("bar1")[0].classList.remove("change_bar1");
        document.getElementsByClassName("bar2")[0].classList.remove("change_bar2");
        document.getElementsByClassName("bar3")[0].classList.remove("change_bar3");
        setShowMenu(true);
      }
    }

    return(<>
        <div className="mobile_icon" onClick={()=>{
            if(showMenu) {
                document.getElementsByClassName("menu_outer")[0].style.display = "grid";
                document.getElementsByClassName("bar1")[0].classList.add("change_bar1");
                document.getElementsByClassName("bar2")[0].classList.add("change_bar2");
                document.getElementsByClassName("bar3")[0].classList.add("change_bar3");
                console.log(showMenu);
            }
            else{
              exitMenu();
              console.log(showMenu);
            }
  
            
            setShowMenu(!showMenu);
          }}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </div>
  
        <div id="menu" className="menu_outer"> 
  
          <div className="menu_inner">
            <a href="#home" onClick={exitMenu}> HOME </a>
            <a href="#projects" onClick={exitMenu}> PROJECTS </a>
            <a href="#about" onClick={exitMenu}> ABOUT </a>
            <a href="#contact" onClick={exitMenu}> CONTACT </a>
          </div>
  
        </div>
          
        <div className="sideBar_menu">
            <a href="#home" id="home_icon" className="one" >  </a>
      
            <a href="#projects" id="projects_icon" className="two" >  </a>

            <a href="#about" id="about_icon" className="three" >  </a>

            <a href="#contact" id="contact_icon" className="four" >  </a>
        </div>
    </>);
}

export default Menu;