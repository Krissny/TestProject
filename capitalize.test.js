const capitalize = require("./capitalize");

test("capitalization", () => {
  expect(capitalize("krish")).toBe("KRISH");
});
test("works with already capital strings", () => {
  expect(capitalize("KRISH")).toBe("KRISH");
});
test("works with empty strings", () => {
  expect(capitalize("")).toBe("");
});
