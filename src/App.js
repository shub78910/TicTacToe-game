import './App.css';
import React, { useState, useEffect } from 'react';

let message
let score_O = 0;
let score_X = 0;
let user1 = prompt("Enter your name");
let user2 = prompt("Enter your friend's name");

function App() {


  const [game, setGame] = useState(["", "", "", "", "", "", "", "", ""])
  const [isXChance, setX] = useState(true)
  const[text,setText]=useState("")

  useEffect(() => {

    let winner = checkWin();
    if (winner) {
      customAlert(`Congratulations, ${winner} won!`)
      if (winner == "X") {
        score_X = score_X + 1
      }
      else {
        score_O = score_O + 1
      }
      refresh()
    }

    if (game[0] != "" && game[1] != "" && game[2] != "" && game[3] != "" && game[4] != "" && game[5] != "" && game[6] != "" && game[7] != "" && game[8] != "" && (!winner)) {
      customAlert("Draw!")
      refresh()
    }

  }, [game])





  function clickhandler(ind) {
    let st = Array.from(game)
    if (game[ind] == "") {
      st[ind] = isXChance ? "X" : "O";
      setX(!isXChance)
    }
    else {
      customAlert("Don't click on the same grid.")
    }

    setGame(st)

  }



  const checkWin = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (game[a] && game[a] === game[b] && game[a] === game[c]) {
        return game[a];
      }

    }
    return null;
  }


  function customAlert(message) {
    setText(message)
  }
  function removeBlur(){
    setText("")
  }



  function refresh() {
    setGame(["", "", "", "", "", "", "", "", ""])
  }


  return (
    <>
      <div className="main">
        <h1>TicTacToe!</h1>
        <div className={text!==""?"alert":"hidden"}>{text}<br/><br/><br/>
        <button  onClick={removeBlur}>OK</button>
        </div>

        <div className={text!==""?"gameboard blur":"gameboard"}>
        
          <div className="box" onClick={() => clickhandler(0)} > {game[0]} </div>
          <div className="box" onClick={() => clickhandler(1)} > {game[1]} </div>
          <div className="box" onClick={() => clickhandler(2)} > {game[2]} </div>
          <div className="box" onClick={() => clickhandler(3)} > {game[3]} </div>
          <div className="box" onClick={() => clickhandler(4)} > {game[4]} </div>
          <div className="box" onClick={() => clickhandler(5)} > {game[5]} </div>
          <div className="box" onClick={() => clickhandler(6)} > {game[6]} </div>
          <div className="box" onClick={() => clickhandler(7)} > {game[7]} </div>
          <div className="box" onClick={() => clickhandler(8)} > {game[8]} </div>
        </div>
        <div className="score">
          <div>{user1} (O) Score<br/> <span className="scr">{score_O}</span></div>
          <div>{user2} (X) Score<br/> <span className="scr">{score_X}</span></div>
        </div>
        
        <button onClick={refresh}>Reset the Board</button>
      </div>

      


    </>
  );
}

// add the "draw" alert feature :Done!
// restart feature :Done!
// add the feature to not change texts after one click :Done!
// add score counter :done!
// add "add your name" feature: done! 
// twice for two players:yess
// add more styling and effects
// ad color changing feature
// Thats it.
//add different alert function

export default App;
