function reverseString(str) {
  const stringRev = [...str].reverse().join("");
  return stringRev;
}

module.exports = reverseString;
