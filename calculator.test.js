const calculator = require("./calculator");

test("add two numbers", () => {
  expect(calculator.add(4, 6)).toBe(10);
});

test("subtract two numbers", () => {
  expect(calculator.subtract(10, 2)).toBe(8);
});

test("multiply two numbers", () => {
  expect(calculator.multiply(5, 4)).toBe(20);
});

test("divide two numbers", () => {
  expect(calculator.divide(100, 4)).toBe(25);
});
