export const charToIndex = (char: string): number => {
  // 'a'.charCodeAt() === 97
  return char.charCodeAt(0) - 97;
};
