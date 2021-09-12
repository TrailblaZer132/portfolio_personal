import React from 'react'
import "./menu.scss"

export default function menu({menuOpen, setMenuOpen}) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li className="workclass" onClick={()=>setMenuOpen(false)}>
                    <a href="#works">Works</a>
                </li>
                {/* <li onClick={()=>setMenuOpen(false)}>
                    <a href="#testimonials">Testimonials</a>
                </li> */}
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#contact">Contact me</a>
                </li>
            </ul>
            
        </div>
    )
}
