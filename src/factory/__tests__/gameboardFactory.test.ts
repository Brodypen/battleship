// Step 2 of TOP
// x axis is A-J, y axis is 1-10
import Gameboard from "../gameboardFactory";
import Ship from "../shipFactory";
describe("Gameboard testing", () => {
  let gameboard: Gameboard;
  let ship: Ship;
  beforeEach(() => {
    gameboard = new Gameboard();
    gameboard.init();
    ship = new Ship(4);
  });

  test("Gameboard is created", () => {
    expect(gameboard).toBeDefined();
  });
  test("Gameboard is filled", () => {
    expect(gameboard.getBoard[0][0]).toEqual({ hasShip: -1, isShot: false });
  });
  // placeShip testing
  test("Placed ship at right location horizontally", () => {
    // place ship 0 at 0,0 horizontally.
    gameboard.placeShip(ship, 0, 0, true);
    expect(gameboard.getBoard[0][0]).toEqual({ hasShip: 0, isShot: false });
    expect(gameboard.getBoard[1][0]).toEqual({ hasShip: 0, isShot: false });
    expect(gameboard.getBoard[2][0]).toEqual({ hasShip: 0, isShot: false });
    expect(gameboard.getBoard[3][0]).toEqual({ hasShip: 0, isShot: false });
  });
  test("Placed ship at right location vertically", () => {
    // place ship 0 at 0,0 vertically.
    gameboard.placeShip(ship, 0, 0, false);
    expect(gameboard.getBoard[0][0]).toEqual({ hasShip: 0, isShot: false });
    expect(gameboard.getBoard[0][1]).toEqual({ hasShip: 0, isShot: false });
    expect(gameboard.getBoard[0][2]).toEqual({ hasShip: 0, isShot: false });
    expect(gameboard.getBoard[0][3]).toEqual({ hasShip: 0, isShot: false });
  });
  test("ReceiveAttack hit", () => {
    gameboard.placeShip(ship, 0, 0, true);
    gameboard.receiveAttack(0, 0);
    expect(gameboard.getShips[0].getShipHits).toEqual(1);
    expect(gameboard.getBoard[0][0]).toEqual({ hasShip: 0, isShot: true });
  });
  test("ReceiveAttack miss", () => {
    gameboard.placeShip(ship, 0, 0, true);
    gameboard.receiveAttack(5, 5);
    expect(gameboard.getShips[0].getShipHits).toEqual(0);
    expect(gameboard.getBoard[5][5]).toEqual({ hasShip: -1, isShot: true });
  });
  test("All ships sunk", () => {
    gameboard.placeShip(ship, 0, 0, true);
    gameboard.receiveAttack(0, 0);
    gameboard.receiveAttack(1, 0);
    gameboard.receiveAttack(2, 0);
    gameboard.receiveAttack(3, 0);
    expect(gameboard.allShipsSunk()).toBe(true);
  });
  test("Ships are not sunk", () => {
    gameboard.placeShip(ship, 0, 0, true);
    gameboard.receiveAttack(0, 0);
    gameboard.receiveAttack(1, 0);
    gameboard.receiveAttack(2, 0);
    expect(gameboard.allShipsSunk()).toBe(false);
  });
  // v2 test cases
  // Testing valid placement of ships
  test("Valid placement of ship", () => {
    expect(gameboard.isValidPlacement(ship, 0, 0, true)).toBe(true);
  });
  // test out of bounds placement
  test("Out of bounds placement of ship", () => {
    expect(gameboard.isValidPlacement(ship, 7, 7, true)).toBe(false);
  });
  // test overlapping placement
  test("Overlapping placement of ship", () => {
    gameboard.placeShip(ship, 0, 0, true);
    expect(gameboard.isValidPlacement(ship, 0, 0, true)).toBe(false);
  });

});
