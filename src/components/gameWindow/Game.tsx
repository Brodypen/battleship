import React from "react";
import Menu from "../menu/Menu";
import Player from "../../factory/playerFactory";
import Gameboard from "../../factory/gameboardFactory";
import GameController from "../../factory/GameController";
import { inherits } from "util";
const Game = () => {
  // 0 = Menu, 1 = (player select), 2 = Game (player turn), 3 = Game (enemy turn)
  // Move this logic to GameController
  // const [turn, setTurn] = React.useState(0);
  const [gameController, setGameController] = React.useState<GameController>(new GameController(0));
  const [turn, setTurn] = React.useState(0);

  const startGame = () => {
    gameController.setTurn(1);
    setTurn(gameController.getTurn);
    gameController.init();
    // console.log(gameController.getPlayerOne.getPlayerBoard.getBoard);
    console.log(gameController.getPlayerOne.getPlayerBoard);
    // console.log(gameController.getPlayerOne.getPlayerBoard.getShips);
  };

  return (
    <div className="text-white flex justify-center">
      {turn === 0 && (
        <button className="bg-red-500 hover:bg-red-400 text-white text-2xl font-bold py-6 px-12 border-b-4 border-red-700 hover:border-red-500 rounded mt-64" onClick={startGame}>
          Play
        </button>
      )}

      {turn === 1 && (<Menu playerBoard={gameController.getPlayerOne.getPlayerBoard} />)}
    </div>
  );
};

export default Game;
