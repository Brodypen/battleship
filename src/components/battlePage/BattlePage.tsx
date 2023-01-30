import React from 'react'
import GameController from '../../factory/GameController'
import PlayerBoardDIS from '../gameWindow/PlayerBoardDIS';
interface GameProps {
  playerGameController: GameController;
}
const BattlePage = ({playerGameController}: GameProps) => {
    const [playerTurn, setPlayerTurn] = React.useState(true);
    const [displayInstructions, setDisplayInstructions] = React.useState("Pick a spot to attack!");
    const [gameOver, setGameOver] = React.useState(false);
    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

    const onAttack = (Row: number, Col: number) => {
        console.log("HEYO!", Row, Col);
        console.log(playerTurn)
        if (playerTurn) {
            playerGameController.getPlayerTwo.attack(playerGameController.getPlayerTwo.getPlayerBoard, Row, Col);
            console.log(playerGameController.getPlayerTwo.getPlayerBoard);
            setPlayerTurn(false);
            setDisplayInstructions("Player Two's Turn!");
            sleep(1000).then(() => {setDisplayInstructions("Player One's Turn!");});
            //  playerGameController.getPlayerTwo.attack(
            //    playerGameController.getPlayerOne.getPlayerBoard,
            //    Row,
            //    Col
            //  );
             
        }
        // } else {
        //     playerGameController.getPlayerOne.receiveAttack(Row, Col);
        //     setPlayerTurn(true);
        //     setDisplayInstructions("Player One's Turn!");
        // }
        // if (playerGameController.getPlayerOne.isGameOver() || playerGameController.getPlayerTwo.isGameOver()) {
        //     setGameOver(true);
        //     setDisplayInstructions("Game Over!");
        // }
        }
  return (
    <div className="p-5 flex flex-col items-center gap-5">
      <p>Howdy</p>
        <p>{playerTurn ? "Player One" : "Player Two"}'s Turn</p>
        <p>{displayInstructions}</p>

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
}

export default BattlePage