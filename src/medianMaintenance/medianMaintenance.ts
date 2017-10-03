/**
 * Keeps a running account of the median
 */
export class MedianMaintenanceArray {
  data: number[] = [];

  /**
   * Adds a number to the internal storage, and returns the new median
   * O(n)
   */
  add(item: number): number {
    for (let index = 0; index < this.data.length; index++) {
      if (item < this.data[index]) {
        this.data.splice(index, 0, item);
        return this.median();
      }
    }
    this.data.push(item);
    return this.median();
  }

  /** Returns median in O(1) */
  private median() {
    if (this.data.length % 2 == 0) {
      const middle2 = this.data.length / 2;
      const middle1 = middle2 - 1;
      return (this.data[middle1] + this.data[middle2]) / 2;
    }
    else {
      const middle = Math.floor(this.data.length / 2);
      return this.data[middle];
    }
  }
}
