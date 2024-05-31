const caesarCipher = require("./caesarCipher");

test("Valid Cipher", () => {
  expect(caesarCipher("abc", 1)).toBe("bcd");
});

test("Wrapping from z to a", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("Case preservation", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});
