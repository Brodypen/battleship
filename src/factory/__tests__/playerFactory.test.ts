import Player from "../playerFactory";
import Gameboard from "../gameboardFactory";
describe("Player testing", () => {
    let player: Player;
    let playerGameboard: Gameboard;
    let enemy: Player;
    let enemyGameboard: Gameboard;

    beforeEach(() => {
        playerGameboard = new Gameboard();
        enemyGameboard = new Gameboard();
        player = new Player(playerGameboard, "Player");
        enemy = new Player(enemyGameboard, "Enemy");
        playerGameboard.init();
        enemyGameboard.init();
        // enemy.placeShipsRandomly(enemyGameboard);
    });
    // check if testing variables are defined
    test("Player is created", () => {
        expect(player).toBeDefined();
    });
    test("Player has gameboard", () => {
        expect(playerGameboard).toBeDefined();
    });
    test("Player has enemy", () => {
        expect(enemy).toBeDefined();
    });
    test("Player has enemy gameboard", () => {
        expect(enemyGameboard).toBeDefined();
    });
    // check if players can choose random place for ships
    test("Player can place ships randomly", () => {
        player.placeShipsRandomly(playerGameboard);
        expect(playerGameboard.getShips.length).toEqual(5);
    });
    // check if players can attack enemy
    test("Player can attack enemy", () => {
        // player.placeShipsRandomly(playerGameboard);
        expect(player.attack(enemyGameboard, 0, 0)).toBe(true);
        // Not sure how this works, will have to check later...
        // Doesn't matter if it's a hit or miss, just that it's shot.
        expect(enemyGameboard.getBoard[0][0]).toEqual({ hasShip: -1||Number, isShot: true });
    });


});