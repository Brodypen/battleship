// Step 1 TOP
class Ship {
  length: number;
  isSunk: boolean = false;
  hits: number;

  constructor(length: number) {
    this.length = length;
    this.hits = 0;
  }
  hit(): void {
    this.hits++;
    this.isSunk = this.checkIsSunk();
  }
  checkIsSunk(): boolean {
    return this.hits === this.length;
  }
  getShipHits(): number {
    return this.hits;
  }
  getIsSunk(): boolean {
    return this.isSunk;
  }
}

export default Ship;
