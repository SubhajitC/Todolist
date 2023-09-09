 
const User = require('../models/User');

exports.registerUser = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = new User({ email, password });
      await user.save();
      res.status(201).json(user);
    } catch (error) {
      console.error('Error registering user:', error.message);
      res.status(500).json({ error: 'Server error' });
    }
  };