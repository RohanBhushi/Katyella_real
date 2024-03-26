

import './Topblock.css';
import FooterCurve from '../Assets/FooterCurve.svg';
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Topblock = (props) => {
    useEffect(()=>{
        AOS.init({duration:1000, animationIterationCount:1} );
    },[])

  return (
    
    <div className="topblock">
    <div className="innerDiv" data-aos="fade-down"
     data-aos-duration="3000">
    <h1>{props.pageheading}</h1>
    <hr />
    <div className="path" >
        <span className='path'><span className="bold">Home</span> {'>'} {props.pageheading}</span>
    </div>
    </div>
    <img className='footercurve' src={FooterCurve} alt="footercurve" />
    </div>
  )
}

export default Topblock