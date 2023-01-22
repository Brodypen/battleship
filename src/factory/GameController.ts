import Gameboard from "./gameboardFactory";
import Player from "./playerFactory";

class GameController {
    private playerOne: Player;
    private playerTwo: Player;
    private turn: number;

    constructor() {
        this.playerOne = new Player(new Gameboard(), "Player One");
        this.playerTwo = new Player(new Gameboard(), "Player Two");
        this.turn = 0;
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

}
export default GameController;