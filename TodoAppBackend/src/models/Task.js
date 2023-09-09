 
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
  dueDate: Date,
  // Add other fields as needed
});

module.exports = mongoose.model('Task', taskSchema);