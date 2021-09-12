import React,{useState} from 'react'

import Menu from "./components/menu/menu";
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/intro";
import Portfolio from "./components/portfolio/portfolio";
import Works from "./components/works/works";
// import Testimonials from "./components/testimonials/testimonials";
import Contacts from "./components/contact/contact";
import "./app.scss"

function App() {
  const [menuOpen,setMenuOpen]=useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>

      <div className="sections">

        <Intro />
        <Portfolio />
        <Works />
        {/* <Testimonials /> */}
        <Contacts />
        
      </div>
      
    </div>
  );
}

export default App;

