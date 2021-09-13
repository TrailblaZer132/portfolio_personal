import PortfolioList from '../portfolioList/PortfolioList';

import './portfolio.scss';
import {useState, useEffect} from 'react';
import {webPortfolio, mobilePortfolio, designsPortfolio} from "../../data"



export default function Portfolio() {

    const [selected,setSelected]=useState("web");
    const [data,setData]=useState([]);

    const list=[
        {
            id:"web",
            title:"Web App",
        },
        {
            id:"mobile",
            title:"Mobile App",
        },
        {
            id:"designs",
            title:"Designs",
        },
    ]



    useEffect(()=>{
        
        switch(selected){
            case "web":
                setData(webPortfolio);
                break;
            case "mobile":
                setData(mobilePortfolio);
                break;
            case "designs":
                setData(designsPortfolio);
                break;
            default:
                setData(webPortfolio);
        }

    },[selected])

    return (
        
        <div className="portfolio" id="portfolio">
            <video className='videoTag' autoPlay loop muted>
                <source src="./assets/video.mp4" type='video/mp4' alt="" />
            </video>
            <h1>Portfolio</h1>
            <ul>
                {list.map(item=>(
                    <PortfolioList title={item.title} active={selected===item.id} setSelected={setSelected}
                    id={item.id}/>
                ))}
            </ul>
            <div className="container">
                {data.map(d=>(                
                    <div className="item">
                        <a href={d.url} target="#blank">
                        <img src={d.img} alt=""/>
                        </a>
                        <h3>{d.title}</h3>
                        
                    </div>
                ))}
                
            </div>
        </div>
    )
}
