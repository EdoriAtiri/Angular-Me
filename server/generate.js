let faker = require("faker");

let database = { products: [] };

for (let i = 1; i <= 300; i++) {
  database.products.push({
    id: 1,
    name: faker.commerce.productName(),
    description: faker.lorem.sentence(),
    price: faker.commerce.price(),
    imageUrl: "http://source.unsplash.com/1600x900/?product",
    quantity: faker.random.number(),
  });
}

console.log(JSON.stringify(database));
