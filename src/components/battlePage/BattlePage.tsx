import React from "react";
import GameController from "../../factory/GameController";
import PlayerBoardDIS from "../gameWindow/PlayerBoardDIS";
interface GameProps {
  playerGameController: GameController;
}
const BattlePage = ({ playerGameController }: GameProps) => {
  const [playerTurn, setPlayerTurn] = React.useState(true);
  const [displayInstructions, setDisplayInstructions] = React.useState(
    "Pick a spot to attack!"
  );
  const [gameOver, setGameOver] = React.useState(0);
  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  const checkIfGameIsOver= () => {
    if(playerGameController.getPlayerOne.getPlayerBoard.allShipsSunk()){
      setDisplayInstructions("You lost!");
      setGameOver(1);
    } else if(playerGameController.getPlayerTwo.getPlayerBoard.allShipsSunk()){
      setDisplayInstructions("You won!");
      setGameOver(2);
    } else {
      setGameOver(0);
    }
  }

  const onAttack = (Row: number, Col: number) => {
    // if (playerTurn) {
      if(gameOver !== 0){
        return;
      }


     if(
      playerGameController.getPlayerTwo.attack(
        playerGameController.getPlayerTwo.getPlayerBoard,
        Row,
        Col
      )){
        // !TODO, if attack but no given x or y value, random value.
        checkIfGameIsOver();
        if(gameOver !== 0){
          setPlayerTurn(!playerTurn);
          return;
        }
        sleep(10).then(() => {
          const x = Math.floor(Math.random() * 10);
          const y = Math.floor(Math.random() * 10);
          if(playerGameController.getPlayerOne.attack(
            playerGameController.getPlayerOne.getPlayerBoard,
            x,
            y
          )){
            // Completed!
            setPlayerTurn(!playerTurn);
            checkIfGameIsOver();
            return;
          } else {
            while(true){
              const newX = Math.floor(Math.random() * 10);
              const newY = Math.floor(Math.random() * 10);
              if(playerGameController.getPlayerOne.attack(
              playerGameController.getPlayerOne.getPlayerBoard,
              newX,
              newY)){
                setPlayerTurn(!playerTurn);
                checkIfGameIsOver();
                return;
              }
              
            }
          }
        });

      } else {
        setDisplayInstructions("Invalid coordinates!");
        return;
      }
  };
  return (
    <div className="p-5 flex flex-col items-center gap-5">
      <p>Howdy</p>
      <p>{playerTurn ? "Player One" : "Player Two"}'s Turn</p>
      <p
        className={`${
          displayInstructions === "You won!"
            ? "text-2xl text-green-400"
            : displayInstructions === "You lost!" ? "text-2xl text-red-400" : ""
        }`}
      >
        {displayInstructions}
      </p>

      <div className="flex gap-12">
        <PlayerBoardDIS
          playerBoard={playerGameController.getPlayerOne.getPlayerBoard}
        ></PlayerBoardDIS>
        <PlayerBoardDIS
          playerBoard={playerGameController.getPlayerTwo.getPlayerBoard}
          shipToMove={-2}
          onClickProp={onAttack}
        ></PlayerBoardDIS>
      </div>
    </div>
  );
};

export default BattlePage;
