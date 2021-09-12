import React from 'react'

import "./topbar.scss"
import {Mail} from "@material-ui/icons"

export default function Topbar({menuOpen,setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen&&"active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">
                        <img src="assets/logo.png" alt="" />
                    </a>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <a href="mailto:webmaster@example.com" style={{textDecoration:"none", color:'inherit'}}><span>uditjeet@gmail.com</span></a>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
