const express = require('express');
const app = express();

// Get port from environment variable or use 8080
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to BosNotes API',
    version: '1.0.0',
    status: 'running'
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

// Start server
app.listen(PORT, () => {
  console.log(`BosNotes server is running on port ${PORT}`);
});
