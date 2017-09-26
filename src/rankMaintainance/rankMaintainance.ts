import { Heap } from '../heap/heap';


const maintain = new Heap<number>((a, b) => a - b);
[1, 4, 2, 5].forEach(x => maintain.add(x));
let curr = maintain.extractRoot()
while (curr != null) {
  console.log(curr);
  curr = maintain.extractRoot();
}
