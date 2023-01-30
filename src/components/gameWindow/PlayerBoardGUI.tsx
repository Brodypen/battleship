import React from "react";
import Gameboard from "../../factory/gameboardFactory";
import PlayerBoardDIS from "./PlayerBoardDIS";
interface GameProps {
  playerBoard: Gameboard;
}

const PlayerBoardGUI = ({ playerBoard }: GameProps) => {
  const [shipToMove, setShipToMove] = React.useState(-1);
  const [displayWords, setDisplayWords] = React.useState(
    "Click to rearrange your ships!"
  );

  const shipNames: { [key: number]: string } = {
    0: "Destroyer",
    1: "Submarine",
    2: "BattleShip",
    3: "Carrier",
    4: "Cruiser",
  };

  const onMove = (Row: number, Col: number) => {
    const shipPicked = playerBoard.getBoard[Row][Col].hasShip;
    if (shipToMove === -1 && shipPicked === -1) return;

    // console.log(`Row: ${Row} Col: ${Col}`);
    // console.log("SP:", shipPicked);
    // console.log("Ship to move", shipToMove);
    if (shipPicked !== -1 && shipToMove !== shipPicked) {
      setShipToMove(shipPicked);
      setDisplayWords("Ship " + shipNames[`${shipPicked}`] + " Selected!");
      return;
    }
    const x = playerBoard.getShips[shipToMove].getShipHead[0];
    const y = playerBoard.getShips[shipToMove].getShipHead[1];
    if (
      playerBoard.isValidPlacement(
        playerBoard.getShips[shipToMove],
        Row,
        Col
      ) === false
    ) {
      if (JSON.stringify([x, y]) === JSON.stringify([Row, Col])) {
        // add logic to rotate ship.
        playerBoard.getShips[shipToMove].rotateShip();
        if (
          playerBoard.isValidPlacement(
            playerBoard.getShips[shipToMove],
            Row,
            Col
          ) === true
        ) {
          playerBoard.relocateShip(playerBoard.getShips[shipToMove], Row, Col);
          setShipToMove(-1);
          setDisplayWords("Rotating Ship!");
        }
      } else {
        setDisplayWords("Invalid Placement!");
      }
      return;
    }

    playerBoard.relocateShip(playerBoard.getShips[shipToMove], Row, Col);
    setShipToMove(-1);
  };
  return (
    <div className="gap-5">
      <p
        className={`text-center font-mono text-2xl ${
          displayWords === "Invalid Placement!" ? "text-red-300" : ""
        } mb-5`}
      >
        {displayWords}
      </p>
      <PlayerBoardDIS playerBoard={playerBoard} onClickProp={onMove} shipToMove={shipToMove}/>

    </div>
  );
};

export default PlayerBoardGUI;
