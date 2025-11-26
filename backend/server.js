// Import Express
const express = require('express');

// Create an Express app
const app = express();

// Define the port
const PORT = 3000;

// Create a simple route
app.get('/', (req, res) => {
  res.send('Hello from Local Grocer backend! 🛒');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});