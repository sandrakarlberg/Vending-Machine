const { Drink, Chips } = require("../dist/modules/product");

test("Drink buy and use", () => {
  const cola = new Drink("Cola", 10, "Cold drink");
  expect(cola.buy()).toBe("You bought a Cola for 10 kr.");
  expect(cola.use()).toBe("You drink the Cola");
});

test("Chips buy and use", () => {
  const chips = new Chips("Ranch", 15, "Tasty");
  expect(chips.buy()).toBe("You bought a bag of Ranch for 15");
  expect(chips.use()).toBe("You grab a handful of Ranch");
});
