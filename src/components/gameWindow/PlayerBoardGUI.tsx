import React from 'react'
import Gameboard from '../../factory/gameboardFactory'
interface GameProps{
  playerBoard: Gameboard
}

const PlayerBoardGUI = ({playerBoard}: GameProps) => {
  return (
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
                    className={`bg-slate-100 w-10 h-10 border border-slate-700 hover:bg-slate-400
                        ${
                          playerBoard.getBoard[rowIndex][colIndex].hasShip === 0
                            ? `bg-emerald-400`
                            : playerBoard.getBoard[rowIndex][colIndex]
                                .hasShip === 1
                            ? `bg-red-400`
                            : playerBoard.getBoard[rowIndex][colIndex]
                                .hasShip === 2
                            ? `bg-blue-400`
                            : playerBoard.getBoard[rowIndex][colIndex]
                                .hasShip === 3
                            ? `bg-yellow-400`
                            : playerBoard.getBoard[rowIndex][colIndex]
                                .hasShip === 4
                            ? `bg-purple-400`
                            : ""
                        }`}
                    key={colIndex}
                    onClick={() => {
                      console.log(`Row: ${rowIndex} Col: ${colIndex}`);
                    }}
                  />
                )
              )}
            </div>
          )
        )}
      </div>
  );
}

export default PlayerBoardGUI