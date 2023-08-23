// Importa o módulo http do Node.js
const http = require('http');

// Simulated products data
const products = [
  { name: 'Produto 1', preco: 1 },
  { name: 'Produto 2', preco: 2 },
  { name: 'Produto 3', preco: 3 },
  // ... add more products
];

// Cria um servidor HTTP
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  
  // Parse query parameter
  const precoParam = new URL(req.url, `http://${req.headers.host}`).searchParams.get('preco');

  // Find a product based on price parameter
  const filteredProduct = products.find(product => {
    return precoParam ? product.preco == precoParam : false;
  });

  // Respond with JSON
  res.end(JSON.stringify(filteredProduct, null, 2));
});

// Define a porta onde o servidor irá escutar
const PORT = process.env.PORT || 3000;

// Inicia o servidor
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
