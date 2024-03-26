

import './ContactBody.css';
import Button from '../Components/Button';

const ContactBody = () => {
  return (
    <div className='contactBody'>
        <div className="formBody">
        <img src="https://assets-global.website-files.com/6446e55fad4a83409f5c87f6/6446e55fad4a833de55c8887_letter.svg" alt="pic" />
        <h1>Drop Us a Line</h1>

        <div className="nameMail field" >
            <div className="name">
                <label htmlFor="pname">YOUR NAME</label>
                <br />
                <input type="text" id='pname' placeholder= 'James Bond' />
            </div>
            <div className="mail">
                <label htmlFor="mailId">EMAIL ADDRESS</label>
                <br />
                <input type="email" id='mailId' placeholder='james@bond.com' />
            </div>
        </div>
        <div className="subject field">
            <label htmlFor="subject">SUBJECT</label>
            <br />
            <input type="text" id='subject' placeholder='Enter the subject' />
        </div>

        <div className="message field">
            <label htmlFor="message">MESSAGE</label>
            <br />
            <textarea name="message" id="message" cols="30" rows="10" placeholder='How can we help you ? '></textarea>
        </div>
        <Button height={"3rem"} width={"12rem"} borderRadius={"0.5rem"} fontColor={"#FFF"} backgroundColor={"#ffa949"} padding={"0.6rem 1rem"} fontSize={"1.3rem"} fontWeight={"600"} >Submit Message</Button>
        </div>
        
    </div>
  )
}

export default ContactBody