import React from "react";
import Menu from "../menu/Menu";
import Player from "../../factory/playerFactory";
import Gameboard from "../../factory/gameboardFactory";
import GameController from "../../factory/GameController";
const Game = () => {
  // 0 = Menu, 1 = (player select), 2 = Game (player turn), 3 = Game (enemy turn)
  // Move this logic to GameController
  // const [turn, setTurn] = React.useState(0);
  const [GameController, setGameController] = React.useState<GameController>();

  const startGame = () => {
    console.log(GameController!.getTurn);

  };

  return (
    <div className="text-white flex justify-center">
      {GameController!.getTurn === 0 && (
        <button className="bg-red-500 hover:bg-red-400 text-white text-2xl font-bold py-6 px-12 border-b-4 border-red-700 hover:border-red-500 rounded mt-64" onClick={startGame}>
          Play
        </button>
      )}
      {GameController!.getTurn === 1 && GameController && (<Menu playerBoard={GameController.getPlayerOne.getPlayerBoard} />)}
    </div>
  );
};

export default Game;
