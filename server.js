// server.js
const express = require('express');
const app = express();
const db = require('./database');

app.use(express.json());

// Endpoint to calculate the total value of products
app.post('/api/total-value', (req, res) => {
  const products = req.body.products;

  if (!Array.isArray(products)) {
    return res.status(400).json({ error: 'Products should be an array of objects.' });
  }

  let totalValue = 0;

  for (const product of products) {
    const { price, quantity } = product;
    if (typeof price === 'number' && typeof quantity === 'number') {
      totalValue += price * quantity;
    } else {
      return res.status(400).json({ error: 'Each product should have a numeric price and quantity.' });
    }
  }

  res.json({ totalValue });
});

// Optional: Populate database (if needed)
app.post('/api/add-products', (req, res) => {
  const products = req.body.products;

  db.serialize(() => {
    const stmt = db.prepare("INSERT INTO products (name, price, quantity) VALUES (?, ?, ?)");
    products.forEach(product => {
      stmt.run(product.name, product.price, product.quantity);
    });
    stmt.finalize();
  });

  res.json({ message: 'Products added successfully' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
