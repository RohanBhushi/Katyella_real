import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import './Testimonials.css';
import PersonCards from './PersonCards';
import Jeff from '../Assets/Jeff.jpeg';
import Hesom from '../Assets/Hesom.jpeg';
import Ed from '../Assets/Ed.jpeg';
import Rick from '../Assets/Rick.jpeg';
import Stefano from '../Assets/Stefano.jpeg';
import FooterCurve from '../Assets/FooterCurve.svg';

import AOS from 'aos';
import 'aos/dist/aos.css';


function Testimonials() {

    useEffect(()=>{
        AOS.init({duration:1000, animationIterationCount:1} );
    },[])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
    return (
        <div className="testimonials">
            <h5>TESTIMONIALS</h5>
            <h1>Stop worrying about your contractors and start collaborating</h1>


            <div className="cardsDiv">
                <Slider {...settings} className="slider">
                <PersonCards source={Jeff} person={"Jeff Ayars"} para={"“Above all, I was impressed with the quality of Chase's solutions, he never just built a feature or fixed a bug, he thought through maintenance, extensibility, and performance and engineered a clean solution that improved our product beyond the expectation of the story.”"}></PersonCards>

                <PersonCards source={Hesom} person={"Hesom Parhizkar"} para={"“Partnering with Matt over several years at eVestment was a seamless experience. I never had to worry about any project he was involved in. His work was always executed quickly and thoroughly. He effectively managed an entire product line by himself, demonstrating exceptional reliability and expertise.”"}></PersonCards>

                <PersonCards source={Rick} person={"Rick Faucher"} para={"“Ian is a highly skilled full-stack engineer. He quickly assessed our needs and immediately dove in to do the work with little direction required. He is very efficient, communicative and deftly handles troubleshooting and coordination across stakeholders. He is a pleasure with whom time collaborate and work”"}></PersonCards>

                <PersonCards source={Ed} person={"Ed Joseph"} para={"“During his time at Balto Software, Matthew consistently impressed me with his expertise in robust, efficient, and scalable solutions for our projects. His proficiency in crafting solutions and AWS, made him an invaluable member of our team.”"}></PersonCards>

                <PersonCards source={Jeff} person={"Jeff Ayars"} para={"“I was impressed with Matt's breadth and depth of skills as an engineer. Whether teaching observable to his peers for our Angular 2/4 frontend or implementing our Terraform plans for ECS based services or completing stories for Java or Node.js based services, Matt picked up what he needed and got the job done.”"}></PersonCards>

                <PersonCards source={Stefano} person={"Stefano Bertelli"} para={"' Ians ability to quickly familiarize himself with new technologies and concepts makes him a valuable asset. His dedication to continuous learning and ability to communicate effectively with non-technical resources makes him an outstanding and well-rounded engineer that is a pleasure to work with.'"}></PersonCards>
            </Slider>
            </div>


            <img src={FooterCurve} alt="bottomImg" className="bottomImg" />
        </div>
    );
}

export default Testimonials