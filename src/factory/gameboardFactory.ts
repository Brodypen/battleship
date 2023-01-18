import Ship from "./shipFactory";
class Gameboard {
    // Logic of the board is to have a object matrix
    // hasShip 0 = no ship, 1-5 = what ship number
    // isShot false = not shot, true = shot
    // isShot == true && hasShip == 0 = missed shot
    board: object[][];
    ships: Ship[];
    constructor() {
        this.board = [];
        this.ships = [];
    }
    init(){
        let fakeColumnBoard: object[] = [];
        for (let i = 0; i < 10; i++) {
        fakeColumnBoard.push({hasShip: 0, isShot: false });
        }
        for (let i = 0; i < 10; i++) {
            this.board.push(fakeColumnBoard);
        }
    }

    placeShip(ship: Ship, x: number, y: number, horizontal: boolean) {
        // if (horizontal) {
        //     for (let i = 0; i < ship.length; i++) {
        //         ship.location.push([
    }
}

export default Gameboard;
