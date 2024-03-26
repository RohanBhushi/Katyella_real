

import './Learn.css';
import Button from '../Components/Button';
import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CourseCards from './CourseCards';

import Rewrite from '../FootPart/PhotosFooter/Rewrite.png';
import Algebra from '../FootPart/PhotosFooter/Algebra.png'
import Dog from '../FootPart/PhotosFooter/Dog.png';
import Manifold from '../FootPart/PhotosFooter/Manifold.png';
import Person from '../FootPart/PhotosFooter/Person.png';
import Secondary from '../FootPart/PhotosFooter/Secondary.png';
import Plug from '../FootPart/PhotosFooter/Plug.png';
import Green from '../FootPart/PhotosFooter/Green.png';


const Learn = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2
  };
  return (
    <div className="learn">


    <div className="containerDiv">
    <div className="leftViewPost">
      <h5>RECENT POSTS</h5>
      <h2>Learn From Our Experts</h2>
      <Button height={"3.5rem"} width={"12rem"} borderRadius={"0.5rem"} fontColor={"#FFF"} backgroundColor={"#ffa949"} padding={"0.6rem 1rem"} fontSize={"1.3rem"} fontWeight={"600"} >View All Posts</Button>
    </div>

    <div className="sliderCards">
    <Slider {...settings} className="slider">
    <CourseCards source={Rewrite} timestamp = {"MAY 2, 2023 IN SPRING"} tagline={'Simplify Spring Boot Version Migration with OpenRewrite'} picsrc={Person} personName={"Matthew Wojtowicz"}
       divheight={"30rem"} divWidth={"30rem"} fontSize={"1.6rem"} fontWeight={'550'} imageHeight={"14rem"} imageWidth={"100%"} />

      <CourseCards source={Dog} timestamp = {"MAY 11, 2023 IN"} tagline={'Three Tools To Keep Your Dependencies Up To Date In A SpringBoot Project'} picsrc={Person} personName={"Matthew Wojtowicz"}
       divheight={"30rem"} divWidth={"30rem"} fontSize={"1.6rem"} fontWeight={'550'} imageHeight={"14rem"} imageWidth={"100%"} />

      <CourseCards source={Algebra} timestamp = {"MAY 1, 2023 IN JAVA"} tagline={'Java 8 To 18: Most Important Changes In The Java Platform'} picsrc={Person} personName={"Matthew Wojtowicz"}
       divheight={"30rem"} divWidth={"30rem"} fontSize={"1.6rem"} fontWeight={'550'} imageHeight={"14rem"} imageWidth={"100%"} />

      <CourseCards source={Manifold} timestamp = {"MAY 2, 2023 IN SPRING"} tagline={'Is This The Future Of Java?'} picsrc={Person} personName={"Matthew Wojtowicz"}
       divheight={"30rem"} divWidth={"30rem"} fontSize={"1.6rem"} fontWeight={'550'} imageHeight={"14rem"} imageWidth={"100%"} />

      <CourseCards source={Plug} timestamp = {"MAY 2, 2023 IN SPRING"} tagline={'Providing A GraphQL Endpoint In Spring Boot'} picsrc={Person} personName={"Matthew Wojtowicz"}
       divheight={"30rem"} divWidth={"30rem"} fontSize={"1.6rem"} fontWeight={'550'} imageHeight={"14rem"} imageWidth={"100%"} />

      <CourseCards source={Green} timestamp = {"MAY 2, 2023 IN SPRING"} tagline={'Spring Boot And Spring Batch: Creating A Job Runner For Database Exports'} picsrc={Person} personName={"Matthew Wojtowicz"}
       divheight={"30rem"} divWidth={"30rem"} fontSize={"1.6rem"} fontWeight={'550'} imageHeight={"14rem"} imageWidth={"100%"} />
    </Slider>


      
    </div>
    </div>

    
    </div>
  )
}

export default Learn;