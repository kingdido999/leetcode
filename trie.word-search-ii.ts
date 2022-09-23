class TrieNode {
  word: string;
  children: Map<string, TrieNode>;

  constructor() {
    this.word = null;
    this.children = new Map();
  }
}

function findWords(board: string[][], words: string[]): string[] {
  let root = new TrieNode();

  // Contruct the trie from words
  for (let word of words) {
    let node = root;

    for (let c of word) {
      if (node.children.has(c)) {
        node = node.children.get(c);
      } else {
        const newNode = new TrieNode();
        node.children.set(c, newNode);
        node = newNode;
      }
    }

    // Store word in the leaf node
    node.word = word;
  }

  let res = [];

  // Backtrack starting from each cell in the board
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (root.children.has(board[row][col])) {
        backtrack(row, col, root);
      }
    }
  }

  return res;

  function backtrack(row: number, col: number, parent: TrieNode) {
    const c = board[row][col];
    const currNode = parent.children.get(c);

    if (currNode.word !== null) {
      // If we found a word, add it to the result and remove it from the trie
      res.push(currNode.word);
      currNode.word = null;
    }

    // Mark the current letter as visited
    board[row][col] = "#";

    // Explore neighbor cells in around-clock directions:
    // up, right, down, left
    let rowOffset = [-1, 0, 1, 0];
    let colOffset = [0, 1, 0, -1];

    for (let i = 0; i < 4; i++) {
      const newRow = row + rowOffset[i];
      const newCol = col + colOffset[i];

      if (
        newRow < 0 ||
        newRow >= board.length ||
        newCol < 0 ||
        newCol >= board[0].length
      ) {
        continue;
      }

      if (currNode.children.has(board[newRow][newCol])) {
        backtrack(newRow, newCol, currNode);
      }
    }

    // Done with exploration. Restore the letter
    board[row][col] = c;

    // Optimization: incrementally remove the leaf nodes
    if (currNode.children.size === 0) {
      parent.children.delete(c);
    }
  }
}
