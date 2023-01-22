import React from 'react'
import Gameboard from '../../factory/gameboardFactory'
interface GameProps{
  playerBoard: Gameboard
}
// Component for Player Select
const Menu = ({playerBoard}: GameProps) => {
  // console.log(playerBoard);
  return (
    <div>
      <div className="p-5 flex flex-col items-center gap-5">
        <p className="font-mono text-2xl">Howdy Player One!</p>
        <p className="font-mono text-2xl">Drag and place your ships!</p>
      </div>
      <div className="">
        <div className="flex justify-center">
          {playerBoard.getBoard.map(
            (
              row,
              rowIndex // Map through each row
            ) => (
              <div className="flex flex-col" key={rowIndex}>
                {row.map(
                  (
                    col,
                    colIndex // Map through each column
                  ) => (
                    
                    <div
                      className={
                        `bg-slate-100 w-10 h-10 border border-slate-700 hover:bg-emerald-200 ${playerBoard.getBoard[rowIndex][colIndex].hasShip >= 0 ? "bg-emerald-400" : ""}`}
                      key={colIndex}
                      onClick={() => {
                        
                        console.log(playerBoard.getBoard[rowIndex][colIndex])
                        console.log(`Row: ${rowIndex} Col: ${colIndex}`);
                      }}
                    />
                  )
                )}
              </div>
            )
          )}
          <div className="ml-20">Select Boats here</div>
        </div>
      </div>
    </div>
  );
}

export default Menu