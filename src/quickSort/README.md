# Quicksort algorithm using TypeScript
> Quicksort (also called partition sort and pivot sort) is arguably the most used sorting algorithm. It is the one commonly implemented internally in language runtimes. In this lesson we cover the quick sort algorithm, why is it called *quick* and how to implement it using TypeScript / JavaScript.

* Partition an array around a pivot element.

  /** TODO */
  /** Partition around the pivot so that [less]pivot[more] in the original array */

* The reason why its called quick is because of its very low memory overhead since we are doing the sorting in place.
* At a high level, randomly selecting the pivot gives a pivot that is in the 25% to 75% position in a given set of elements at about half the times. This gives us a fairly consistently decreasing problem size which brings it to an average runtime of O(n log n).

