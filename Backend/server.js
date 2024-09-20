const express = require('express');
const cors = require('cors');
require('./config/db'); // Ensure this path is correct

const app = express();

app.use(cors());
app.use(express.json()); // Middleware to parse JSON request bodies

// Import the routes
const requesterRoutes = require('./routes/requesterRoutes');

// Use the requester routes
app.use('/api/Requester', requesterRoutes);

// Donor routes (if needed)
const donorRoutes = require('./routes/donorRoutes');
app.use('/api/Donor', donorRoutes);

const PORT = 3100;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
