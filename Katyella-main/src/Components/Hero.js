

import './Hero.css';
import HeroImg from '../HeroImg.png';
import 'animate.css';
import Button from './Button';
import BottomDsn from '../BottomDsn.svg'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="container">
            <div className="leftHero ">
            <div className="innerLeft ">
            <h4>FULLSTACK JAVA DEVELOPMENT</h4>
                <h1>Get a Fullstack Java developer without the months of recruitment</h1>
                <p>Want a developer who does frontend, backend and <br />
                infrastructure? Try one of our developers.</p>
                <p className="underlined">One Month Money Back Guarantee!</p>

                <div className="btnBox">
                <Button height={"3rem"} width={"15rem"} borderRadius={"0.5rem"} fontColor={"#FFF"} backgroundColor={"#ffa949"} padding={"0.6rem 1rem"} fontSize={"1.3rem"} fontWeight={"600"} >Schedule an Intro Call</Button>

                <Button height={"3rem"} width={"10rem"} borderRadius={"0.5rem"} fontColor={"#574b8a"} backgroundColor={"#fff"} padding={"0.6rem 1rem"} fontSize={"1.3rem"} fontWeight={"600"} >Learn</Button>
                </div>
            </div> 
            </div>

            <div className="RightHero">
                <div className="imageDiv">
                    <img src={HeroImg} alt="hero-img" />
                </div>
            </div>
        </div>

        <img className='bottomDsn' src={BottomDsn} alt="bottom-design" />
    </div>
  )
}

export default Hero