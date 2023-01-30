import React from "react";
import PlayerBoardGUI from "../gameWindow/PlayerBoardGUI";
import GameController from "../../factory/GameController";
interface GameProps {
  playerGameController: GameController;
  startBattleOnClick: () => void;
}
// ! Todo: Add a button to randomize the board again, Click once to rotate. Click and drag to move individual ships.
// Component for Player Select
const Menu = ({ playerGameController, startBattleOnClick }: GameProps) => {
  const [reloadBoard, boardToReload] = React.useState(false);

  const randomizeBoard = () => {
    playerGameController.getPlayerOne.placeShipsRandomly(playerGameController.getPlayerOne.getPlayerBoard);
    // Not good practice.
    boardToReload(!reloadBoard);
  };
  return (
    <div className="p-5 flex flex-col items-center gap-5">
      <p className="font-mono text-2xl">Howdy Player One!</p>

      <PlayerBoardGUI playerBoard={playerGameController.getPlayerOne.getPlayerBoard} />
      <div className="flex gap-5">
        <button
          className="bg-blue-500 hover:bg-blue-400 text-white text-2xl font-bold py-6 px-12 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          onClick={randomizeBoard}
        >
          Randomize
        </button>
        <button className="bg-red-500 hover:bg-red-400 text-white text-2xl font-bold py-6 px-12 border-b-4 border-red-700 hover:border-red-500 rounded" onClick={startBattleOnClick}>
          Battle!
        </button>
      </div>
    </div>
  );
};

export default Menu;
