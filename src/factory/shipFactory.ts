// Step 1 TOP
class Ship {
  private length: number;
  private isSunk: boolean;
  private hits: number;

  constructor(length: number) {
    this.length = length;
    this.isSunk = false;
    this.hits = 0;
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
}

export default Ship;
