
const express = require('express');
const path = require('path');
const app = express();

// Serve frontend build
app.use(express.static(path.join(__dirname, 'client', 'build')));

// Example API route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

// Catch-all handler to serve React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
