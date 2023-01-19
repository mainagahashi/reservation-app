const Product = require("./model/product.js");

class FakeDb {
  constructor() {
    this.products = [
      {
        name: "Phone XL",
        price: 799,
        description: "A large phone with one of the best screens",
        head1: "mom",
        head2: "mom2",
        head3: "mom3",
      },
      {
        name: "Phone Mini",
        price: 699,
        description: "A great phone with one of the best cameras",
      },
      {
        name: "Phone Standard",
        price: 299,
        description: "",
      },
      {
        name: "Phone Standard",
        price: 22299,
        description: "",
      },
      {
        name: "Phone XL",
        price: 799,
        description: "A large phone with one of the best screens",
        head1: "mom",
        head2: "mom2",
        head3: "mom3",
      },
    ];
  }
  async initDb() {
    await this.cleanDb();
    this.pushProductsToDb();
  }

  async cleanDb() {
    await Product.deleteMany({});
  }

  pushProductsToDb() {
    this.products.forEach((product) => {
      const newProduct = new Product(product);
      newProduct.save();
    });
  }
  seeDb() {
    this.pushProductsToDb();
  }
}

module.exports = FakeDb;
