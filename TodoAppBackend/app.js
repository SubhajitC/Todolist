 
const express = require('express');
const connectDB = require('./src/config/database');
const taskRoutes = require('./src/routes/taskRoutes');
const userRoutes = require('./src/routes/userRoutes');
const bodyParser = require('body-parser');

const app = express();

// Middleware setup and configuration
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Define routes
app.use('/api/tasks', taskRoutes);
app.use('/api/users', userRoutes);

// Start the Express.js server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});