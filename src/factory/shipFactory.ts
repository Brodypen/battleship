// Step 1 TOP
class Ship {
  length: number;
  isSunk: boolean = false;
  hits: number[] = [];

  constructor(length: number) {
    this.length = length;
  }
  hit(index: number): void {
    if (!this.hits.includes(index)) {
    this.hits.push(index);
    }
    this.isSunk = this.checkIsSunk();
  }
  checkIsSunk(): boolean {
    return this.hits.length === this.length;
  }
}

export default Ship;
