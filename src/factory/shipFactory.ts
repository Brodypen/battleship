// Step 1 TOP
class Ship {
  private length: number;
  private isSunk: boolean;
  private hits: number;
  private isHorizontal: boolean;
  private shipHead: number[];

  constructor(length: number, isHorizontal: boolean) {
    this.length = length;
    this.isSunk = false;
    this.hits = 0;
    this.isHorizontal = isHorizontal;
    this.shipHead = [];
  }
  hit(): void {
    this.hits++;
    this.isSunk = this.checkIsSunk();
  }
  checkIsSunk(): boolean {
    return this.hits === this.length;
  }
  get getShipHits(): number {
    return this.hits;
  }
  get getIsSunk(): boolean {
    return this.isSunk;
  }
  get getLength(): number {
    return this.length;
  }
  get getIsHorizontal(): boolean {
    return this.isHorizontal;
  }
  set setIsHorizontal(isHorizontal: boolean) {
    this.isHorizontal = isHorizontal;
  }
  rotateShip(): void {
    this.isHorizontal = !this.isHorizontal;
  }
  get getShipHead(): number[] {
    return this.shipHead;
  }
  set setShipHead(shipHead: number[]) {
    this.shipHead = shipHead;
  }
}

export default Ship;
