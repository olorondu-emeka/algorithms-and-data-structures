// Binary Search Trees

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert_iterative(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let current = this.root;
      while (true) {
        if (newNode.value < current.value) {
          // go left if left exists
          if (current.left === null) {
            current.left = newNode;
            return this;
          }

          current = current.left;
        } else {
          // go right if right exists
          if (current.right === null) {
            current.right = newNode;
            return this;
          }

          current = current.right;
        }
      }
    }
  } // end insert_iterative

  insert_recursive(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    let theBST = this;

    return (function insert(node) {
      if (!node.left && newNode.value < node.value) {
        node.left = newNode;
        return theBST;
      }

      if (!node.right && newNode.value > node.value) {
        node.right = newNode;
        return theBST;
      }

      if (newNode.value < node.value) {
        return insert(node.left);
      } else {
        return insert(node.right);
      }
    })(current);
  } // end insert_recursive

  find_recursive(value) {
    if (!this.root) return undefined;
    let current = this.root;
    let theValue = value;

    return (function find(node) {
      if (theValue === node.value) {
        return node;
      }

      if (node.left && theValue < node.value) {
        return find(node.left);
      }

      if (node.right && theValue > node.value) {
        return find(node.right);
      }

      return null;
    })(current);
  } // end find_recursive

  BFS() {
    if (!this.root) return undefined;

    let results = [];
    let queue = [this.root];
    let node;

    while (queue.length) {
      node = queue.shift();
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }

      results.push(node.value);
    }

    return results;
  }

  DFS_preOrder() {
    if (!this.root) return undefined;
    let current = this.root;
    let results = [];

    (function traverse(node) {
      results.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    })(current);

    return results;
  }

  DFS_postOrder() {
    if (!this.root) return undefined;
    let current = this.root;
    let results = [];

    (function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      results.push(node.value);
    })(current);

    return results;
  }

  DFS_inOrder() {
    if (!this.root) return undefined;
    let current = this.root;
    let results = [];

    (function traverse(node) {
      if (node.left) traverse(node.left);
      results.push(node.value);
      if (node.right) traverse(node.right);
    })(current);

    return results;
  }

  heightBalanced() {
    if (!this.root) return false;
    let leftHeight = 0,
      rightHeight = 0;

    function dfs(node) {
      //         console.log(node);
      if (!node.left && !node.right) return 1;

      let left = 1,
        right = 1;
      if (node.left) left = left + dfs(node.left);
      if (node.right) right = right + dfs(node.right);

      console.log(`left ${left}`, `right ${right}`);
      return Math.max(left, right);
    }

    if (this.root.left) leftHeight += leftHeight + dfs(this.root.left);
    if (this.root.right) rightHeight = dfs(this.root.right);

    console.log(leftHeight, rightHeight);
  }
}

//example
//                    20D
//                  /    \
//                12      25
//                / \    /   \
//              10   15  22  50
//                          /
//                        28

let bst = new BST();
// bst.insert_iterative(20);
// bst.insert_iterative(12);
// bst.insert_iterative(25);
// bst.insert_iterative(50);
// bst.insert_iterative(10);
// bst.insert_iterative(28);
// bst.insert_iterative(22);

bst.insert_recursive(3);
bst.insert_recursive(2);
bst.insert_recursive(20);
bst.insert_recursive(15);
bst.insert_recursive(25);
// bst.insert_recursive(28);
// bst.insert_recursive(22);
// bst.insert_recursive(15);

bst.heightBalanced();
