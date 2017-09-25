/**
 * Maintains a minimum value
 */
export class Minimum {
  data: number[] = [];

  /**
   * O(n)
   */
  add(item: number) {
    for (let index = 0; index < this.data.length; index++) {
      if (item > this.data[index]) {
        this.data.splice(index, 0, item);
        return;
      }
    }
    this.data.push(item);
  }

  /**
   * O(1)
   */
  extract(): number | undefined {
    return this.data.pop();
  }
}

/**
 * Maintains a maximum value
 */
export class Maximum extends Minimum {
  add(item: number) {
    for (let index = 0; index < this.data.length; index++) {
      if (item < this.data[index]) {
        this.data.splice(index, 0, item);
        return;
      }
    }
    this.data.push(item);
  }
}

const maintain = new Maximum();
/**
 * n x n = O(n^2)
 */
[1, 4, 2, 5].forEach(x => maintain.add(x));
let curr = maintain.extract()
while (curr != null) {
  console.log(curr);
  curr = maintain.extract();
}
