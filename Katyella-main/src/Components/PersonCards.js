


import './PersonCards.css';

const PersonCards = (props) => {

 


  return (
    <div className='personCards'>
        <img src={props.source} alt="person" />
        <h3>{props.person}</h3>
        <p>{props.para}</p>
        <div className="ratings">⭐⭐⭐⭐⭐</div>
    </div>
  )
}

export default PersonCards;