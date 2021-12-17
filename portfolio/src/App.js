
import React, {useEffect, useState} from 'react';
import './App.css';
import Menu from "./components/Menu";
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {

  const [page, setPage] = useState("home");
  useEffect(()=>{
    console.log("updating page... re-rendering");
  }, [page]);

  const [showMenu, setShowMenu] = useState(true);
  useEffect(()=>{
    console.log("re-rendering");
  }, [showMenu]);


  let exitMenu = () => {
    if(!showMenu){
      document.getElementsByClassName("menu_outer")[0].style.display = "none";
      document.getElementsByClassName("bar1")[0].classList.remove("change_bar1");
      document.getElementsByClassName("bar2")[0].classList.remove("change_bar2");
      document.getElementsByClassName("bar3")[0].classList.remove("change_bar3");
      setShowMenu(true);
    }
  }
  
  let updatePage = (e) =>{
    console.log(e);
    console.log(e.target.attributes.value.value);
    setPage(e.target.attributes.value.value);
    exitMenu();
  }


  return (
    <div className="App">
    

    <>
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
            <a href="#home" value="home" onClick={updatePage}> HOME </a>
            <a href="#projects" value="projects" onClick={updatePage}> PROJECTS </a>
            <a href="#about" value="about" onClick={updatePage}> ABOUT </a>
            <a href="#contact" value="contact" onClick={updatePage}> CONTACT </a>
            <a href="../EmmanuelGonzalezRESUME.pdf"> RESUME </a>
          </div>
  
        </div>
          
        <div className="sideBar_menu">
            <a href="#home" id="home_icon" className="one" value="home" onClick={updatePage}>  </a>
      
            <a href="#projects" id="projects_icon" className="two" value="projects" onClick={updatePage}>  </a>

            <a href="#about" id="about_icon" className="three" value="about" onClick={updatePage}>  </a>

            <a href="#contact" id="contact_icon" className="four" value="contact" onClick={updatePage}>  </a>
        </div>
    </>


    {page === "home"  && <Home updatePage={updatePage} />}
    {page === "about"  && <About />}
    {page === "projects"  && <Projects />}
    {page === "contact"  && <Contact />}

    </div>
  );
}

export default App;
