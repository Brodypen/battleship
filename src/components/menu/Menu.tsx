import React from 'react'
import Gameboard from '../../factory/gameboardFactory'
interface GameProps{
  playerBoard: Gameboard
}
// Component for Player Select
const Menu = ({playerBoard}: GameProps) => {
  console.log("hello");
  return (
    <div>
      <div className="p-5 flex flex-col items-center gap-5">
        <p className="font-mono text-2xl">Howdy Player One!</p>
        <p className="font-mono text-2xl">Drag and place your ships!</p>
      </div>
    </div>
  );
}

export default Menu