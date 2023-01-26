import React from 'react'
import Gameboard from '../../factory/gameboardFactory'
import PlayerBoardGUI from '../gameWindow/PlayerBoardGUI'
interface GameProps{
  playerBoard: Gameboard
}
// ! Todo: Add a button to randomize the board again, Click once to rotate. Click and drag to move individual ships.
// Component for Player Select
const Menu = ({playerBoard}: GameProps) => {
  const [playerBoardIsCorrect, setPlayerBoardIsOkay] = React.useState(true)
  return (
    <div className="p-5 flex flex-col items-center gap-5">
      <p className="font-mono text-2xl">Howdy Player One!</p>
      <p className={`font-mono text-2xl ${playerBoardIsCorrect ? '' : 'text-red-300'}`}>{playerBoardIsCorrect ? "Click to rearrange your ships!" : ""}</p>

    <PlayerBoardGUI playerBoard={playerBoard} />
      {/* <div className="flex justify-center">
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
      </div> */}
      <button
        className="bg-blue-500 hover:bg-blue-400 text-white text-2xl font-bold py-6 px-12 border-b-4 border-blue-700 hover:border-blue-500 rounded"
      >
        Battle!
      </button>
    </div>
  );
}

export default Menu