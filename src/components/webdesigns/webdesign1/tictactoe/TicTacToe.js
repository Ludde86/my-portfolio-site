import React, {useState} from "react";
import "./tictactoe.css"
import Square from "./square/Square";


export default function TicTacToe() {

    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    function handleClick(i) {

        if(squares[i]) {
            return;
        }

        const nextSquares = squares.slice();
        if(xIsNext) {
          
                nextSquares[i] = "X";
           
        } else {
           
                nextSquares[i] = "O";
           
        }
        setSquares(nextSquares);
        setXIsNext(!xIsNext)
       
      }
    
   function Board() {
        return(
            <div className="board">
           <div >
           <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
           <Square value={squares[1]} onSquareClick={() => handleClick(1)}  />
           <Square value={squares[2]} onSquareClick={() => handleClick(2)}  />
           </div>
           
         
         <div>
         <Square value={squares[3]} onSquareClick={() => handleClick(3)}  />
         <Square value={squares[4]} onSquareClick={() => handleClick(4)}  />
         <Square value={squares[5]} onSquareClick={() => handleClick(5)}  />
         </div>
    

         <div>
         <Square value={squares[6]} onSquareClick={() => handleClick(6)}  />
         <Square value={squares[7]} onSquareClick={() => handleClick(7)}  />
         <Square value={squares[8]} onSquareClick={() => handleClick(8)}  />
         </div>
         
            </div>
        );
    }
    
    return(
        Board()
    );
}
