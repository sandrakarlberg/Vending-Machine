const { Wallet } = require("../dist/modules/wallet");

test("Wallet pay and getBalance", () => {
  const wallet = new Wallet(50);
  wallet.pay(20);
  expect(wallet.getBalance()).toBe(30);
});
