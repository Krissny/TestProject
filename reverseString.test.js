const reverseString = require("./reverseString");

test("if string is reversed or not", () => {
  expect(reverseString("neha")).toBe("ahen");
});

test("works with capital letters", () => {
  expect(reverseString("Krish")).toBe("hsirK");
});
