import { Product } from "../modules/product";

class VendingMachine {
  private products: Product[];

  constructor(products: Product[]) {
    this.products = products;
  }

  // listProducts(): void {
  //   console.log("Available products:");
  //   this.products.forEach((product, index) => {
  //     console.log(
  //       `${index + 1}. ${product.name} is available for ${product.price} kr`
  //     );
  //   });
  // }

  listProducts(): string[] {
    return this.products.map(
      (product, index) =>
        `${index + 1}. ${product.name} is available for ${product.price} kr`
    );
  }

  getProduct(index: number): Product | undefined {
    return this.products[index];
  }
}

export { VendingMachine };
