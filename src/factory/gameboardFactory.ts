import Ship from "./shipFactory";
import {IGameboard} from "../utils/types";
class Gameboard {
  // Logic of the board is to have a object matrix
  // hasShip -1 = no ship, 0-4 = what ship number
  // isShot false = not shot, true = shot
  // isShot == true && hasShip == -1 = missed shot
  // 0,0 is top left corner, 9,9 is top right corner.
  private board: IGameboard[][];
  private ships: Ship[];
  constructor() {
    this.board = [];
    this.ships = [];
  }
  init() {
    let fakeColumnBoard: IGameboard[] = [];
    for (let i = 0; i < 10; i++) {
      fakeColumnBoard.push({ hasShip: -1, isShot: false });
    }
    for (let i = 0; i < 10; i++) {
      this.board.push(fakeColumnBoard);
    }
  }
  // Check if ship can be placed.
  isValidPlacement(
    ship: Ship,
    x: number,
    y: number,
    horizontal: boolean
  ): boolean {
    // Check if head of ship is out of bounds or if head of ship has a ship.
    if (x > 9 || x < 0 || y > 9 || y < 0 || this.board[x][y].hasShip !== -1) {
      return false;
    }
    // Horizontal placement checker
    if (horizontal) {
      for (let i = 0; i < ship.getLength; i++) {
        // refactor do not need to check left, only right since horizontal goes left to right.
        if (x + i > 9 || this.board[x + i][y].hasShip !== -1) {
          return false;
        }
      }
    } else {
        for (let i = 0; i < ship.getLength; i++) {
            // refactor do not need to check up, only down since vertical goes up to down.
            if (y + i > 9 || this.board[x][y + i].hasShip !== -1) {
            return false;
            }
        }
    }

    // vertical placement checker

    return true;
  }

  placeShip(ship: Ship, x: number, y: number, horizontal: boolean) {
    // x and y are numbers between 0 and 9.
    // Remember to check if ship can be placed! Not in here.
    // if (!this.isValidPlacement(ship, x, y, horizontal)) {
    //     return;
    // }
    // first let do horizontal placement.
    if (horizontal) {
      for (let i = 0; i < ship.getLength; i++) {
        this.board[x + i][y] = { hasShip: this.ships.length, isShot: false };
      }
    } else {
      for (let i = 0; i < ship.getLength; i++) {
        this.board[x][y + i] = { hasShip: this.ships.length, isShot: false };
      }
    }
    this.ships.push(ship);
  }
  receiveAttack(x: number, y: number) {
    if (this.board[x][y].hasShip !== -1) {
      this.board[x][y].isShot = true;
      this.ships[this.board[x][y].hasShip].hit();
    } else {
      this.board[x][y].isShot = true;
    }
  }

  allShipsSunk() {
    for (const ship of this.ships) {
      if (!ship.getIsSunk) {
        return false;
      }
    }
    return true;
  }
  get getBoard(): IGameboard[][] {
    return this.board;
  }
  get getShips(): Ship[] {
    return this.ships;
  }
}

export default Gameboard;
