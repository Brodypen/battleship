import React from "react";
import Gameboard from "../../factory/gameboardFactory";
interface PlayerBoardDISProps {
  playerBoard: Gameboard;
  onClickProp?: (row: number, col: number) => void;
  shipToMove?: number;
}

const PlayerBoardDIS = ({
  playerBoard,
  onClickProp,
  shipToMove,
}: PlayerBoardDISProps) => {
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
                          playerBoard.getBoard[rowIndex][colIndex].hasShip === -1 || shipToMove ===
                          -2
                            ? `bg-slate-100`
                            : playerBoard.getBoard[rowIndex][colIndex].isShot  ? 'border-red-400 border-8' : shipToMove &&
                              playerBoard.getBoard[rowIndex][colIndex]
                                .hasShip === shipToMove &&
                              rowIndex ===
                                playerBoard.getShips[shipToMove]
                                  .getShipHead[0] &&
                              colIndex ===
                                playerBoard.getShips[shipToMove].getShipHead[1]
                            ? `bg-red-700`
                            : playerBoard.getBoard[rowIndex][colIndex]
                                .hasShip === 0
                            ? `bg-emerald-400`
                            : playerBoard.getBoard[rowIndex][colIndex]
                                .hasShip === 1
                            ? `bg-orange-400`
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
                    onClickProp && onClickProp(rowIndex, colIndex);
                  }}
                />
              )
            )}
          </div>
        )
      )}
    </div>
  );
};

export default PlayerBoardDIS;
