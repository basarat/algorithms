/**
 * Maintains a minimum value
 */
export class Minimum {
  data: number[] = [];

  add(item: number) {
    for (let index = 0; index < this.data.length; index++) {
      if (item > this.data[index]) {
        this.data.splice(index, 0, item);
        return;
      }
    }
    this.data.push(item);
  }

  extract(): number | undefined {
    return this.data.pop();
  }
}
