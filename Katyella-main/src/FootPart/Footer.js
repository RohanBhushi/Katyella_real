
import './Footer.css';
import WhiteLogo from '../FootPart/PhotosFooter/WhiteLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMap, faFacebook, faRocket, faShip, faTelevision } from '@fortawesome/free-solid-svg-icons'



const Footer = () => {
  return (
    <div className="footer">
        <div className="LogoImgDiv">
        <img src={WhiteLogo} alt="katy" />
        <span>Modern Java <br />
              for Your Business</span>
        </div>
        <hr />

        <div className="info">
            <div className="navigation">
            <h3>Navigation</h3>
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Blog</li>
                    <li>Contact</li>
                    <li>Privacy</li>
                </ul>
            </div>

            <div className="contact">
            <h3>Contact Info</h3>
            <ul>
                <li>
                    <span><FontAwesomeIcon icon={faEnvelope} /></span>
                    <span>contact@katyella.com</span>
                </li>
                <li>
                <span><FontAwesomeIcon icon={faMap} /></span>
                <span>5290 Shawnee Rd, <br />
                Alexandria, VA 22312</span>
                </li>
            </ul>
            </div>
        </div>
        <hr />
        <div className="icons">
            <span><FontAwesomeIcon icon={faRocket} /></span>
            <span><FontAwesomeIcon icon={faTelevision} /></span>
            </div>
    </div>
  )
}

export default Footer;