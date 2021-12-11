
import React, {useEffect, useState} from 'react';
import './App.css';
import Menu from "./components/Menu";
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {



  return (
    <div className="App">
    
    <Menu id="menu" />
    <Home />
    <Projects />
    <About />
    <Contact />
    
    </div>
  );
}

export default App;
