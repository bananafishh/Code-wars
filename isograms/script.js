function isIsogram(str) {
  const letters = str.toLowerCase().split('').sort();

  return letters.every((el, i, arr) => el !== arr[i + 1]);
}
