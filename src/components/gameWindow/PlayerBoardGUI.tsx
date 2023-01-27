import React from 'react'
import Gameboard from '../../factory/gameboardFactory'
interface GameProps{
  playerBoard: Gameboard
}

const PlayerBoardGUI = ({playerBoard}: GameProps) => {

  const [shipToMove, setShipToMove] = React.useState(-1)
  const [reload, setReload] = React.useState(false);
  const onMove = (Row: number, Col: number) => {
    const shipPicked = playerBoard.getBoard[Row][Col].hasShip;
    if (shipToMove === -1 && shipPicked === -1) return;
       
    
    // console.log(`Row: ${Row} Col: ${Col}`);
    // console.log("SP:", shipPicked);
    // console.log("Ship to move", shipToMove);
     if (shipPicked !== -1 && shipToMove !== shipPicked) {
       setShipToMove(shipPicked);
       return;
     }
     if(playerBoard.isValidPlacement(playerBoard.getShips[shipToMove], Row, Col) === false) return;
    
    const x = playerBoard.getShips[shipToMove].getShipHead[0];
    const y = playerBoard.getShips[shipToMove].getShipHead[1];
    playerBoard.relocateShip(playerBoard.getShips[shipToMove], Row, Col);
    setReload(!reload);
     
    

  }
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
                    onMove(rowIndex, colIndex);
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