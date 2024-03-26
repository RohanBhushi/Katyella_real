

import './Button.css';

const Button = (props) => {
  return (
    <>
        <button className="btn"
        style={{
            height:props.height,
            width:props.width,
            borderRadius:props.borderRadius,
            color: props.fontColor,
            backgroundColor:props.backgroundColor,
            padding:props.padding,
            fontSize:props.fontSize,
            fontWeight:props.fontWeight
        }}
        >
        {props.children}</button>
    </>
  )
}

export default Button;