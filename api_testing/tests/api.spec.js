// @ts-check
const { test, expect } = require('@playwright/test');

// tests for simple_crud_api

test('To get all the products details', async ({ request }) => {
  const response = await request.get("/api/products");
  console.log(await response.json());
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
});

// get by the id
test.only('Get product by id', async ({ request }) => {
  const response = await request.get("/api/products/65f5918add5c87c4a5f79c3d", 
  {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});
  console.log(await response.json());
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);

  const respBody = await response.json();
  expect(respBody.name).toBe('chicken tikka')
});


test('should create a product', async ({ request }) => {
  const newProduct = await request.post(`/api/products`, {
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

test('should delete a product', async ({ request }) => {
  // Act
  const response = await request.delete(`http://localhost:3000/api/products/:id`, {
    data:   {
    id: "66225323bec65a30fdd37c2d",
  },
  });

  // Assert
  expect(response.ok()).toBeTruthy();
});

