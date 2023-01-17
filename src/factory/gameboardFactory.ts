import Ship from "./shipFactory";
class Gameboard {
    board: object[][];
    ships: Ship[];
    missedAttacks: number[][];
    constructor() {
        this.board = [];
        this.ships = [];
        this.missedAttacks = [];
    }
    init(){
        let fakeColumnBoard: object[] = [];
        for (let i = 0; i < 10; i++) {
        fakeColumnBoard.push({hasShip: false, isShot: false });
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
