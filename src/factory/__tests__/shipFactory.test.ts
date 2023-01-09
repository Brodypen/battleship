import Ship from "../shipFactory";

describe("Ship testing", () => {
    let ship: Ship;

    beforeEach(() => {
        ship = new Ship(4);
    });
    test("Ship is created", () => {
        expect(ship).toBeDefined();
    });
    test("Ship has correct length", () => {
        expect(ship.length).toBe(4);
    });
    test("Ship is not sunk at creation", () => {
        expect(ship.isSunk).toBe(false);
    });
    test("Ship is sunk after all hits", () => {
        ship.hit(0);
        ship.hit(1);
        ship.hit(2);
        ship.hit(3);
        expect(ship.isSunk).toBe(true);
    });
    test("Ship is not sunk after some hits", () => {
        ship.hit(0);
        ship.hit(1);
        expect(ship.isSunk).toBe(false);
    });
    test("Ship cannot be hit twice", () => {
        ship.hit(1);
        ship.hit(1);
        expect(ship.hits.length).toBe(1);
    });

});
    