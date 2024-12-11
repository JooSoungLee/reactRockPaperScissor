import React from 'react';
import '../App.css';

const Box = (props) => {
  let result;
  if (props.title === "Computer" && props.result !== "" && props.result !== "TIE") {
    result = props.result === "WIN" ? "LOSE" : "WIN";
  } else {
    result = props.result;
  }

  return (
    <div className={`box ${result === "" ? "" : result === "WIN" ? "winBox" : result === "TIE" ? "" : "loseBox"}`}>
      <span>점수 : {props.score}</span>
      <h1>{props.title}</h1>
      {props.item && <img className="item-img" src={props.item.img} alt={props.item.name} />}
      <h2>{result}</h2>
    </div>
  );
}

export default Box;