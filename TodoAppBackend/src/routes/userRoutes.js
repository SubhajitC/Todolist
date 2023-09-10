const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define user-related API routes and their corresponding controller functions.
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser); // Define the login route
// Add more routes as needed.

module.exports = router;