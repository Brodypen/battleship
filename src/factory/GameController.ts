import Gameboard from "./gameboardFactory";
import Player from "./playerFactory";

class GameController {
    private playerOne: Player;
    private playerTwo: Player;
    private turn: number;

    constructor(turn: number) {
        this.playerOne = new Player(new Gameboard(), "Player One");
        this.playerTwo = new Player(new Gameboard(), "Player Two");
        this.turn = turn;
    }
    init(): void {
        console.log("heyo");
        this.playerOne.placeShipsRandomly(this.playerOne.getPlayerBoard);
        // this.playerTwo.placeShipsRandomly(this.playerTwo.getPlayerBoard);
    }
    get getPlayerOne(): Player {
        return this.playerOne;
    }
    get getPlayerTwo(): Player {
        return this.playerTwo;
    }
    get getTurn(): number {
        return this.turn;
    }
    setTurn(turn: number) {
        this.turn = turn;
    }

}
export default GameController;