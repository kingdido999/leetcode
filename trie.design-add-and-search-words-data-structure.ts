import TrieNode from "./domain/trie-node";
import { charToIndex } from "./utils/index";

// https://leetcode.com/problems/design-add-and-search-words-data-structure/
class WordDictionary {
  private root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  addWord(word: string): void {
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
    return this.searchNode(word, this.root);
  }

  private searchNode(word: string, root: TrieNode): boolean {
    let node = root;

    for (let i = 0; i < word.length; i++) {
      const c = word[i];

      if (c === ".") {
        // Check if any child has a letter
        for (let j = 0; j < 26; j++) {
          if (node.children[j] !== undefined) {
            // If a letter exists, keep searching down the remaining word
            const hasWord = this.searchNode(
              word.substring(i + 1),
              node.children[j]
            );

            if (hasWord) {
              // We have found the word
              return true;
            }
          }
        }
      }

      const idx = charToIndex(c);

      if (node.children[idx] === undefined) {
        return false;
      }

      node = node.children[idx];
    }

    return node.endOfWord;
  }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
