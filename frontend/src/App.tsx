import "./index.css";
import { VendingMachine } from "../../src/modules/vendingMachine";
import { Drink, Chips } from "../../src/modules/product";
import { Wallet } from "../../src/modules/wallet";
import { useState } from "react";

const App = () => {
  const chips = [
    { name: "Ranch chips", price: 21, description: "Tasty chips" },
    { name: "Sourcream chips", price: 22, description: "Tasty chips" },
  ];

  const drinks = [
    { name: "Coca cola", price: 15, description: "Cold and bubbly" },
    { name: "Fanta", price: 15, description: "Cold and bubbly" },
  ];

  const myChips = chips.map(
    (chips) => new Chips(chips.name, chips.price, chips.description)
  );

  const myDrinks = drinks.map(
    (drinks) => new Drink(drinks.name, drinks.price, drinks.description)
  );

  const machine = new VendingMachine([...myChips, ...myDrinks]);

  const [wallet, setWallet] = useState(new Wallet(100));
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const buyProduct = (index: number) => {
    const product = machine.getProduct(index);
    if (product) {
      const myWallet = new Wallet(wallet.getBalance());
      myWallet.pay(product.price);
      setWallet(myWallet);
    } else {
      console.error("Invalid product index");
    }
  };

  const showInfo = (index: number) => {
    setSelectedIndex(index === selectedIndex ? null : index);
  };

  return (
    <>
      <h1>Vending Machine</h1>
      <p>You've got {wallet.getBalance()} kr</p>
      <ul style={{ listStyle: "none" }}>
        {machine.listProducts().map((product, index) => {
          const prodObj = machine.getProduct(index);
          return (
            <li key={index}>
              {product}
              <button
                style={{ marginLeft: 10 }}
                onClick={() => showInfo(index)}
              >
                Show info
              </button>
              <button
                style={{ marginLeft: 10 }}
                onClick={() => buyProduct(index)}
              >
                Purchase
              </button>
              {selectedIndex === index && prodObj && (
                <p style={{ marginTop: "5px" }}>{prodObj.description}</p>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default App;
