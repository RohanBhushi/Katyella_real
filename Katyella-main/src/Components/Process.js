import './Process.css';
import Balto from '../Assets/Balto.png';
import Evestment from '../Assets/Evestment.png';
import Itemmaster from '../Assets/Itemmaster.webp';
import Redhat from '../Assets/Redhat.png';
import Soundex from '../Assets/Soundex.png';
import Thrivent from '../Assets/Thrivent.png';
import Cup from '../Assets/Cup.PNG';
import Button from './Button';
import ProcessCard from './ProcessCard';
import Telephone from '../Assets/Telephone.PNG';
import Mobile from '../Assets/Mobile.PNG';
import Fblike from '../Assets/Fblike.PNG';
import Chat from '../Assets/Chat.PNG';
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Process =()=>{
    useEffect(()=>{
        AOS.init({duration:1000});
    },[])


    return(
        <div className='processDiv'>
            
            <div className="companyDiv">
            <img src={Balto} alt="balto" />
            <img src={Evestment} alt="evestment" />
            <img src={Itemmaster} alt="itemmaster" />
            <img src={Redhat} alt="redhat" />
            <img src={Soundex} alt="soundex" />
            <img src={Thrivent} alt="thrivent" />
            </div>

            <div className="teacupDiv">
                <div className="cupImg" data-aos="fade-right">
                <img src={Cup} alt="" />
                </div>
                <div className="textPart" data-aos="fade-left">
                <h5>SIMPLE & POWERFUL</h5>
                <h2>Take the interview process from months to hours.</h2>
                <hr />
                <p>All our developers are based in the United States with years of experience in Java development. Get experts into your app executing your vision without having to deal with timezones or quality issues. If you need senior engineers to add features or system architects to redesign a current application to deal with new found success, Katyella has what you are looking for.</p>
                </div>
            </div>

            <div className='btnBox'>
            <Button height={"1.85rem"} width={"11rem"} borderRadius={"0.5rem"} fontColor={"#FFF"} backgroundColor={"#ffa949"} padding={"0rem 1rem"} fontSize={"1.3rem"} fontWeight={"600"} >OUR PROCESS</Button>
            </div>

            <div className="processCards">
                <ProcessCard source={Telephone} heading={"1. Discovery call"} content={"Lets find out in a 15 min call what you are exactly looking for. Do you a need a developer heavier on the backend for your etl projects. Do you need a react + java dev for you customer facing app? Or maybe you some AWS skills to move to dockerization in EKS?"}></ProcessCard>

                <ProcessCard source={Mobile} heading={"2. Pair up"} content={"One more call with the candidate we believe to best fit your needs. This is a one hour call for you and the candidate to talk about each others backgrounds and get to know where they best can fit in your team"}></ProcessCard>

                <ProcessCard source={Fblike} heading={"3. Trial Week"} content={"Work together for a full week to get to know how each other work. There will be some onboarding work to get through but our candidates are so good they will show some true value. This can either be in some architecture documentation, advice in CI/CD best practices and suggestions on modern tooling. If not we can try to pair up with another canidate or we part ways no charge to you."}></ProcessCard>

                <ProcessCard source={Chat} heading={"4. Embedding in Your Team"} content={"You now have a new partner who will be an integrated part of your team. All work in the US so time zones are of no problem. Watch as our devs build your vision of the future."}></ProcessCard>
            </div>
            



        </div>


    )
}

export default Process;






