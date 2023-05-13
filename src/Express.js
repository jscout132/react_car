const express = require('express');
const app = express();

// Add CORS headers to allow requests from any origin
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Your API endpoints go here
app.get('/cars', (req, res) => {
  // Return the data
});

app.listen(3000, () => console.log('Server started'));
