import {useState} from "react";
import './App.css';
import Box from "./component/Box"
import gawi from './images/gawi.png'
import bawi from './images/bawi.png'
import bo from './images/bo.png'


// 1. 박스 2개 (타이틀, 사진, 결과)
// 2. 가위 바위 보 버튼이 있다
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다.
// 5. 3 4 결과를 가지고 누가 이겼는지 승패를 따진다.
// 6. 승패 결과에 따라 테두리 색이 바뀐다. (이기면 초록, 지면-빨강, 비기면-검은색)

const choice = {
  rock:{
    name:"rock",
    img:bawi
  },
  scissors:{
    name:"scissors",
    img:gawi
  },
  paper:{
    name:"paper",
    img:bo
  }
}
function App() {
const [userSelect, setUserSelect] = useState(null);
const [computerSelect, setComputerSelect] = useState(null);
const [result, setResult] = useState("");


  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);

    setResult(judgement(choice[userChoice], computerChoice));
  }

  const judgement = (user, computerChoice) => {
    console.log("user : " + user);
    console.log("computerChoice : " + computerChoice);

    /** 
     * 결과 알고리즘 (유저 입장)
     * 
     * user == computer 비김
     * user == rock, computer == scissors    user승리
     * user == rock, computer == paper       user패배
     * user == scissors, computer == paper   user승리
     * user == scissors, computer == rock    user패배
     * user == paper, computer == rock       user승리
     * user == paper, computer == scissors   user패배
     * */ 
    if(user.name === computerChoice.name){
      return "TIE"
    }else if(user.name==="rock"){
      return computerChoice.name==="scissors"?"WIN":"LOSE"
    }else if(user.name==="scissors"){
      return computerChoice.name==="paper"?"WIN":"LOSE"
    }else if(user.name==="paper"){
      return computerChoice.name==="rock"?"WIN":"LOSE"
    }
    
  }

  const randomChoice = () => {
    // Object.keys : 객체의 키값만 뽑아서 Array로 만들어주는 함수
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    console.log("randomItem", randomItem);
    let final =  itemArray[randomItem];
    console.log("final : " + final);
    return choice[final];
  }

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} result={result}/>
        <Box title="Computer" item={computerSelect} result={result}/>
      </div>
      <div className="btnClass">
        <button onClick={()=>play("scissors")}>가위</button>
        <button onClick={()=>play("rock")}>바위</button>
        <button onClick={()=>play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
