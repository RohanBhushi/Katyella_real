
import './ProcessCard.css';
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProcessCard = (props) => {

  useEffect(()=>{
    AOS.init({duration:1000});
},[])

  return (
    <div className="processCardDiv" data-aos="fade-left">
        <img src={props.source} alt="" />
        <h3>{props.heading}</h3>
        <p>{props.content}</p>
    </div>
  )
}

export default ProcessCard;