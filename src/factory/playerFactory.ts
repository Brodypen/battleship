import Gameboard from "./gameboardFactory";
import { getRandomInt } from "../utils/mathLogic";
import Ship from "./shipFactory";
class Player {
  board: Gameboard;
  constructor() {
    this.board = new Gameboard();
    // Or remember to init gameboard in gameloop.
    this.board.init();
  }
  placeShipsRandomly(gameboard: Gameboard) {
    // Place 5 ships randomly on the board.
    // index of ship = length of ship
    // 0 = 2, 1 = 3, 2 = 4, 3 = 5, 4 = 3:
    let i = 0;
    let x = 0;
    let y = 0;
    let ifHorizontal = false;
    while (i < 5) {
      // place Ships randomly on board, vertically or horizontally.
      x = getRandomInt(10);
      y = getRandomInt(10);
      ifHorizontal = getRandomInt(2) === 0;
      if (
        gameboard.isValidPlacement(new Ship(3), x, y, ifHorizontal) &&
        i === 4
      ) {
        gameboard.placeShip(new Ship(3), x, y, ifHorizontal);
        i++;
        continue;
      } else if (
        gameboard.isValidPlacement(new Ship(i + 2), x, y, ifHorizontal)
      ) {
        gameboard.placeShip(new Ship(i + 2), x, y, ifHorizontal);
        i++;
        continue;
      }
      
    }
  }
  attack(gameboard: Gameboard, x: number, y: number): boolean {
    gameboard.receiveAttack(x, y);
    return true;
  }
}

export default Player;
