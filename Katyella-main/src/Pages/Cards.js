
import './Cards.css';
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Cards = (props) => {
    useEffect(()=>{
        AOS.init({duration:1000});
    },[])
    
  return (
    <div className="cards" id="cards" data-aos="fade-left"  >
    <div className="innerCard">
    <img src={props.picUrl} alt="" />
    <div className="textDiv">
    <h3>{props.topic}</h3>
    <p>{props.brief}</p>
    <span>{props.key}</span>
    </div>
    </div>
    
    </div>
  )
}

export default Cards