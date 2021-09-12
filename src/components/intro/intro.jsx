import './intro.scss'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { init } from 'ityped'
import { useEffect, useRef } from 'react';


export default function Intro() {

    const textRef= useRef();

    useEffect(()=>{
        init(textRef.current, { 
            showCursor: false,
            backDelay: 1000,
            strings: ['Developer', 'Designer', 'Programmer' ] 
        })
    
    },[]);

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/avatar.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hello visitor. I'm</h2>
                    <h1>Udit Nath</h1>
                    <h3>A freelance <span ref={textRef}></span></h3>
                    <a href="#portfolio">
                    <KeyboardArrowDownIcon className="down" style={{fill:"inherit"}}/>
                    </a>
                </div>
                
            </div>
        </div>
    )
}
