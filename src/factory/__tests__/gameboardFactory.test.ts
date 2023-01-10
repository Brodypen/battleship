// Step 2 of TOP
// x axis is A-J, y axis is 1-10
import Gameboard from "../gameboardFactory";
describe("Gameboard testing", () => {
    let gameboard: Gameboard;
    beforeEach(() => {
        gameboard = new Gameboard();
    });

    test("Gameboard is created", () => {
        expect(gameboard).toBeDefined();
    });
    // placeShip testing
    test("Placed ship at right location horizontally", () => {
        // place ship 0 at 0,0 horizontally.
        gameboard.placeShip(0, 0, 0, true);
        expect(gameboard.ships[0].location).toEqual([[0, 0], [1, 0], [2, 0], [3, 0]]);
    });
    test("Placed ship at right location vertically", () => {
      // place ship 0 at 0,0 vertically.
      gameboard.placeShip(0, 0, 0, false);
      expect(gameboard.ships[0].location).toEqual([
        [0, 0],
        [0, 1],
        [0, 2],
        [0, 3],
      ]);
    });
    test("ReceiveAttack hit", () => {
        gameboard.placeShip(0, 0, 0, true);
        gameboard.receiveAttack(0, 0);
        expect(gameboard.ships[0].hits).toEqual([1]);
    }
    );
    test("ReceiveAttack miss", () => {
      gameboard.placeShip(0, 0, 0, true);
      gameboard.receiveAttack(5, 5);
      expect(gameboard.ships[0].hits).toEqual([0]);
    });
    test("All ships sunk", () => {
        gameboard.placeShip(0, 0, 0, true);
        gameboard.receiveAttack(0, 0);
        gameboard.receiveAttack(1, 0);
        gameboard.receiveAttack(2, 0);
        gameboard.receiveAttack(3, 0);
        expect(gameboard.allShipsSunk()).toBe(true);
        }
});