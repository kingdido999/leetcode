export default class TrieNode {
  endOfWord: boolean;
  children: TrieNode[];

  constructor() {
    this.endOfWord = false;
    this.children = [];
  }
}
