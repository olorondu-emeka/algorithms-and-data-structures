class HeapItem {
  constructor(item, priority = item) {
    this.item = item;
    this.priority = priority;
  }
}

class MinHeap {
  constructor() {
    this.values = [];
  }

  bubbleUp() {
    let index = this.values.length - 1;
    let parentIndex;

    while (index > 0) {
      // compare value with parent
      parentIndex = Math.floor((index - 1) / 2);

      let heapItem = this.values[index];
      let parent = this.values[parentIndex];

      // if value < parent, swap
      if (parent !== undefined && heapItem.priority < parent.priority) {
        [this.values[index], this.values[parentIndex]] = [
          this.values[parentIndex],
          this.values[index]
        ];
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  push(heapItem) {
    this.values.push(heapItem);
    this.bubbleUp();
  }

  pop() {
    // swap root and last element
    [this.values[0], this.values[this.values.length - 1]] = [
      this.values[this.values.length - 1],
      this.values[0]
    ];

    // return root
    const root = this.values.pop();
    // rearrange heap (i.e bubble bubbleDown)
    this.bubbleDown();

    return root.priority;
  }

  bubbleDown() {
    if (this.values.length === 0) return;

    let index = 0;
    let nextIndex;

    while (index < this.values.length) {
      const left = 2 * index + 1;
      const right = left + 1;

      if (this.values[left] !== undefined || this.values[right] !== undefined) {
        // check for the min value between left and right
        if (this.values[right] !== undefined) {
          nextIndex =
            this.values[right].priority < this.values[left].priority
              ? right
              : left;
        } else {
          nextIndex = left;
        }

        // swap index with nextIndex if value of former is greater than latter
        if (this.values[index].priority > this.values[nextIndex].priority) {
          [this.values[index], this.values[nextIndex]] = [
            this.values[nextIndex],
            this.values[index]
          ];
          index = nextIndex;
        } else {
          break;
        }
      } else {
        break;
      }
    }
  }

  getLength() {
    return this.values.length;
  }

  getvalues() {
    return this.values;
  }
}
