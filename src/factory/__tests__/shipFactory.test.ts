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
        expect(ship.getLength).toBe(4);
    });
    test("Ship is not sunk at creation", () => {
        expect(ship.getIsSunk).toBe(false);
    });
    test("Ship is sunk after all hits", () => {
        ship.hit();
        ship.hit();
        ship.hit();
        ship.hit();
        expect(ship.getIsSunk).toBe(true);
    });
    test("Ship is not sunk after some hits", () => {
        ship.hit();
        ship.hit();
        expect(ship.getIsSunk).toBe(false);
    });
    // This is being tested in gameboardFactory.test.ts.
    // test("Ship cannot be hit twice", () => {
    //     ship.hit(1);
    //     ship.hit(1);
    //     expect(ship.hits.length).toBe(1);
    // });

});
    