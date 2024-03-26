

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import LogoImg from '../LogoImg.png';
import './Header.css';
import Button from './Button';
import { Link } from 'react-router-dom';

const Header =()=>{
    return(
        <div className='header'>
        <nav className="navbar">
        <div className="logoContainer">
            <div className="imageContainer">
                <img className="logoImg" src={LogoImg} alt="" />
            </div>
            <div className="linklists">
                <ul>
                    <li> <Link to={"/"} >Home</Link> </li>
                    <li><Link to={"/articles"} >Articles</Link></li>
                    <li><Link to={"/services"}>Services</Link></li>
                    <li><Link to={"/contact"}>Contact</Link></li>
                    <li><Link>Ebook</Link></li>
                </ul>
            </div>
        </div>


        <div className='rightNav'>
            <div className="searchDiv"><FontAwesomeIcon className='icon' icon={faMagnifyingGlass} /></div>
            <Button height={"3.5rem"} width={"12rem"} borderRadius={"0.5rem"} fontColor={"#FFF"} backgroundColor={"#ffa949"} padding={"0.6rem 1rem"} fontSize={"1.3rem"} fontWeight={"600"} >Schedule a Call</Button>
        </div>
        </nav>
        </div>
    )
}


export default Header;