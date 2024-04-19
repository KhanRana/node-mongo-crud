// @ts-check
const { test, expect } = require('@playwright/test');

// tests for simple_crud_api

//Arrange
const { defineConfig} = require("@playwright/test");
export default defineConfig ({
  use: {
    baseURL: "http://localhost:3000/",
  }
});

test('should create a product', async ({ request }) => {
  const newProduct = await request.post(`http://localhost:3000/api/products`, {
    data:   {
    name: "chicken korma",
    price: 12.99,
  },
  });
  expect(newProduct.ok()).toBeTruthy();

  const allProducts = await request.get(`http://localhost:3000/api/products`);
  expect(allProducts.ok()).toBeTruthy();
  expect(await allProducts.json()).toContainEqual(expect.objectContaining({
    name: "chicken korma",
    price: 12.99,
  }));
});


