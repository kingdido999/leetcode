// https://leetcode.com/problems/implement-trie-prefix-tree/
class TrieNode {
  endOfWord: boolean;
  children: TrieNode[];

  constructor() {
    this.endOfWord = false;
    this.children = [];
  }
}

class Trie {
  private root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
    let node = this.root;

    for (let c of word) {
      const i = charToIndex(c);

      if (node.children[i] === undefined) {
        node.children[i] = new TrieNode();
      }

      node = node.children[i];
    }

    node.endOfWord = true;
  }

  search(word: string): boolean {
    const node = this.searchPrefix(word);
    return node !== undefined && node.endOfWord;
  }

  startsWith(prefix: string): boolean {
    return this.searchPrefix(prefix) !== undefined;
  }

  private searchPrefix(prefix: string): TrieNode {
    let node = this.root;

    for (let c of prefix) {
      const i = charToIndex(c);

      if (node.children[i] === undefined) {
        return undefined;
      }

      node = node.children[i];
    }

    return node;
  }
}

function charToIndex(char: string): number {
  // 'a'.charCodeAt() === 97
  return char.charCodeAt(0) - 97;
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
