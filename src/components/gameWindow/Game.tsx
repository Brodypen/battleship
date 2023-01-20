import React from "react";
import Menu from "../menu/Menu";
const Game = () => {
  // 0 = Menu, 1 = (player select), 2 = Game (player turn), 3 = Game (enemy turn)
  const [turn, setTurn] = React.useState(0);

  const startGame = () => {
    console.log(turn);
    setTurn(1);
  };

  return (
    <div className="text-white flex justify-center">
      {turn === 0 && (
        <button className="bg-red-500 hover:bg-red-400 text-white text-2xl font-bold py-6 px-12 border-b-4 border-red-700 hover:border-red-500 rounded mt-64" onClick={startGame}>
          Play
        </button>
      )}
      {turn === 1 && <Menu />}
    </div>
  );
};

export default Game;
