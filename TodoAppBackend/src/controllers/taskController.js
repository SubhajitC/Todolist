 
const Task = require('../models/Task');

exports.createTask = async (req, res) => {
    try {
      const { title, description } = req.body;
      const task = new Task({ title, description });
      await task.save();
      res.status(201).json(task);
    } catch (error) {
      console.error('Error creating task:', error.message);
      res.status(500).json({ error: 'Server error' });
    }
  };