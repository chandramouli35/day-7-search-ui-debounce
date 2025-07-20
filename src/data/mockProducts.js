export const mockProducts = Array.from({ length: 105 }, (_, index) => ({
  id: index + 1,
  name: `Product ${index + 1}`,
  description: `Description for Product ${
    index + 1
  }. High-quality item with great features.`,
  price: (Math.random() * 100 + 10).toFixed(2),
}));
