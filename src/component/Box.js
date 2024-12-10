import React from 'react'
import '../App.css';

const Box = (props) => {
  console.log("props", props);
  let result;
  if(props.title === "Computer" && props.result !== "" && props.result !== "TIE"){
    result = props.result === "WIN" ? "LOSE" : "WIN";
  }else{
    result = props.result
  }

  return (
    <div className={`box ${result=="WIN"?"winBox":result=="TIE"?"":"loseBox"}`}>  
        <h1>{props.title}</h1>
        <img className="item-img" src={props.item && props.item.img}></img>
        <h2>{result}</h2>
    </div>
  )
}

export default Box