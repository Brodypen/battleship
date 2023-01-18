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
      for (let i = 0; i < 5; i++) {
        // place Ships randomly on board, vertically or horizontally.
        if(i === 4){
            gameboard.placeShip(new Ship(3), getRandomInt(10), getRandomInt(10), getRandomInt(2) === 0);
            continue;
        }
        gameboard.placeShip(new Ship(i + 2), getRandomInt(10), getRandomInt(10), getRandomInt(2) === 0);
      }
      
    }
    attack(gameboard: Gameboard, x: number, y: number): boolean {
        // Check if input is valid.
        if (x > 10 || x < 0 || y > 10 || y < 0 || gameboard.board[x][y].isShot) {
            return false;
        }
        gameboard.receiveAttack(x, y);
        return true;
    }


}

export default Player