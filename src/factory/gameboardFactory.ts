import Ship from "./shipFactory";
interface IGameboard {
    hasShip: number;
    isShot: boolean;
}
class Gameboard {
    // Logic of the board is to have a object matrix
    // hasShip -1 = no ship, 0-4 = what ship number
    // isShot false = not shot, true = shot
    // isShot == true && hasShip == 0 = missed shot
    board: IGameboard[][];
    ships: Ship[];
    constructor() {
        this.board = [];
        this.ships = [];
    }
    init(){
        let fakeColumnBoard: IGameboard[] = [];
        for (let i = 0; i < 10; i++) {
        fakeColumnBoard.push({hasShip: -1, isShot: false });
        }
        for (let i = 0; i < 10; i++) {
            this.board.push(fakeColumnBoard);
        }
    }

    placeShip(ship: Ship, x: number, y: number, horizontal: boolean) {
        // first let do horizontal placement.
        if (horizontal) {
        for (let i = 0; i < ship.length; i++) {
            this.board[x + i][y] = {hasShip: this.ships.length, isShot: false };
        }
        }   else {
        for (let i = 0; i < ship.length; i++) {
            this.board[x][y + i] = {hasShip: this.ships.length, isShot: false };
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
    allShipsSunk(){
        for (const ship of this.ships) {
           if(!ship.getIsSunk()){
                return false;
           }
        }
        return true;
    }
}

export default Gameboard;
