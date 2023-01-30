import Ship from "./shipFactory";
import {IGameboard} from "../utils/types";
class Gameboard {
  // Logic of the board is to have a object matrix
  // hasShip -1 = no ship, 0-4 = what ship number
  // isShot false = not shot, true = shot
  // isShot == true && hasShip == -1 = missed shot
  // 0,0 is top left corner, 9,9 is top right corner.
  private board: IGameboard[][];
  private ships:  Ship[];
  constructor() {
    this.board = [];
    this.ships = [];
    this.init();
  }
  init() {
    // This was causing a bug, the board was being initialized with the same object!
    // let fakeColumnBoard: IGameboard[] = [];
    // for (let i = 0; i < 10; i++) {
    //   fakeColumnBoard.push({ hasShip: -1, isShot: false });
    // }
    // for (let i = 0; i < 10; i++) {
    //   this.board.push(fakeColumnBoard);
    // }
    // This is the correct way to initialize the board. Let's go!
    this.board = [...Array(10)].map(e => Array(10).fill({ hasShip: -1, isShot: false }));
  }
  // Check if ship can be placed.
  isValidPlacement(
    ship: Ship,
    x: number,
    y: number,
  ): boolean {
    const horizontal = ship.getIsHorizontal;
    const shipNumber = this.board[x][y].hasShip;
    const arr = [-1, shipNumber];
    console.log("x: ", x, "y: ", y);
    console.log("shipNumber: ", shipNumber);
    console.log(arr.indexOf(shipNumber));
    //(arr.indexOf(shipNumber) === -1)
    if(x > 9 || x < 0 || y > 9 || y < 0 || this.board[x][y].hasShip !== -1) {
      return false;
    }
    // Horizontal placement checker
    if (horizontal) {
      for (let i = 0; i < ship.getLength; i++) {
        // refactor do not need to check left, only right since horizontal goes left to right.
        //(arr.indexOf(this.board[x + i][y].hasShip) === -1)
        if (x + i > 9 || this.board[x+i][y].hasShip !== -1) {
          return false;
        }
      }
    } else {
        for (let i = 0; i < ship.getLength; i++) {
            // refactor do not need to check up, only down since vertical goes up to down.
            //arr.indexOf(this.board[x][y+1].hasShip) === -1
            if (y + i > 9 || this.board[x][y+i].hasShip !== -1) {
              return false;
            }
        }
    }

    // vertical placement checker

    return true;
  }

  placeShip(ship: Ship, x: number, y: number) {
    // x and y are numbers between 0 and 9.
    // Remember to check if ship can be placed! Not in here.
    // if (!this.isValidPlacement(ship, x, y, horizontal)) {
    //     return;
    // }
    const horizontal = ship.getIsHorizontal;
    if (horizontal) {
      for (let i = 0; i < ship.getLength; i++) {
        this.board[x + i][y] = { hasShip: this.ships.length, isShot: false };
      }
    } else {
      for (let i = 0; i < ship.getLength; i++) {
        this.board[x][y+i] = { hasShip: this.ships.length, isShot: false };
      }
    }
    ship.setShipHead = [x, y];
    if(this.ships.includes(ship)){
      return;
    }
    this.ships.push(ship);
  }
  relocateShip(ship: Ship, x: number, y: number) {
    console.log("Hey im gonna relocate ship ", ship.getLength, " to ", x, y);
    const horizontal = ship.getIsHorizontal;
    const oldHead = ship.getShipHead;
    
    if (horizontal) {
      for (let i = 0; i < ship.getLength; i++) {
         this.board[oldHead[0] + i][oldHead[1]] = {
           hasShip: -1,
           isShot: false,
         };
      }
      for (let i = 0; i < ship.getLength; i++) {
           this.board[x + i][y] = {
           hasShip: this.ships.indexOf(ship),
           isShot: false,
         };
      }
    } else {
      for (let i = 0; i < ship.getLength; i++) {
        this.board[oldHead[0]][oldHead[1] + i] = { hasShip: -1, isShot: false };
        this.board[x][y + i] = { hasShip: this.ships.indexOf(ship), isShot: false };
      }
    }
    ship.setShipHead = [x, y];
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
  getCordValue(x: number, y: number): IGameboard {
    return this.board[x][y];
  }
  cleanBoard(){
    this.init();
    this.ships = [];
  }
}

export default Gameboard;
