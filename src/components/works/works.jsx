import "./works.scss"
import {useState} from 'react'



export default function Works() {


    const[currentSlide,setCurrentSlide]=useState(0);

    const data=[

        {
            id:"1",
            icon:"./assets/all.png",
            title:"Cyber Flow",
            desc:"Cyber Flow, a company boosing the small businesses. Based in New Delhi, India",
            img:"./assets/1.png",
        },
        {
            id:"2",
            icon:"./assets/mobile.png",
            title:"DU Buddy",
            desc:"DU Buddy is an initiative by Cyber Flow for a handy application for the students of Delhi University",
            img:"./assets/2.png",
        },
        {
            id:"3",
            icon:"./assets/all.png",
            title:"Blog Page",
            desc:"Blog tells us a lot about the in and around the world. Introducing the blog page of DU Buddy. Get all your interesting and spicy topics here",
            img:"./assets/3.png",
        },
        {
            id:"4",
            icon:"./assets/desktop.png",
            title:"Nimbus",
            desc:"Nimbus is an IT based company, currently operating in Canada and USA. It manages the data in and out for its partnered companies",
            img:"./assets/4.png",
        },
        {
            id:"5",
            icon:"./assets/mobile.png",
            title:"SCISSORS",
            desc:"Introducing the app with hands-on experience with peer to peer Barber- Customer interactions. This app connects the barbers and helps you to get your hair stylings done at no time",
            img:"./assets/5.png",
        },
        {
            id:"6",
            icon:"./assets/all.png",
            title:"Ahooptie",
            desc:"Ever wondered to have food on the go to a meeting? Well your hunger is well served by the new Taxi and Food services on the same app. Now, never get to work late due to the meal you thought you almost had",
            img:"./assets/6.png",
        },
        {
            id:"7",
            icon:"./assets/desktop.png",
            title:"Kodiblaze",
            desc:"Welcome to the world of music through showing your talent online. Kodiblaze bring you the opportunity to participate in various challenges to upgrade your way towards your melodious goal",
            img:"./assets/7.png",
        },

    ]

    const handleClick=(way)=>{
        way==="left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 6) : setCurrentSlide(currentSlide<data.length -1 ? currentSlide+1 : 0)
    };

    return (
        <div className="works" id="works">
            <div className="slider" style={{transform:`translateX(-${currentSlide*100}vw)`}}>
                {data.map(d=>(
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imageContainer">
                                    <img src={d.icon} alt="" />
                                </div>
                                <h2>{d.title}</h2>
                                <p>{d.desc}
                                </p>
                                
                            </div>
                        </div>
                        <div className="right">
                            <img src={d.img} alt="" />
                        </div>
                    </div>
                    
                </div>))}
                
            </div>

            <img src="assets/arrow.png" className="arrow left" alt="<" onClick={()=>handleClick("left")} />
            <img src="assets/arrow.png" className="arrow right" alt=">" onClick={()=>handleClick()} />
        </div>
    )
}
