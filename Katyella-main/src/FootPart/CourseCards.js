


import './Learn.css';
import './CourseCards.css';

const CourseCards = (props) => {
  return (
    <div className='courseCards' style={{
        height:props.divheight,
        width:props.divWidth
    }}>

    <img
    style={{
        height: props.imageHeight,
        width: props.imageWidth
    }}

     src= {props.source} alt="course" />
    <span className="time">{props.timestamp}</span>

    <h3 style={{fontSize:props.fontSize,
    fontWeight:props.fontWeight
    }}>{props.tagline}</h3>

    <div className="picDiv">
        <img className='personPic' src={props.picsrc} alt="pic" />
        <span className="personName">{props.personName}</span>
    </div>
    </div>
  )
}

export default CourseCards