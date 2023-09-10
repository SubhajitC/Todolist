const Task = require('../models/Task');

// Function to create a task
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

// Function to get all tasks
exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        console.error('Error getting tasks:', error.message);
        res.status(500).json({ error: 'Server error' });
    }
};

// Function to get a specific task by ID
exports.getTaskById = async (req, res) => {
    try {
        const taskId = req.params.taskId;
        const task = await Task.findById(taskId);

        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }

        res.status(200).json(task);
    } catch (error) {
        console.error('Error getting task:', error.message);
        res.status(500).json({ error: 'Server error' });
    }
};

// Function to update a task by ID
exports.updateTaskById = async (req, res) => {
    try {
        const taskId = req.params.taskId;
        const { title, description, completed, dueDate } = req.body;

        const task = await Task.findByIdAndUpdate(
            taskId,
            { title, description, completed, dueDate },
            { new: true } // Return the updated task
        );

        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }

        res.status(200).json(task);
    } catch (error) {
        console.error('Error updating task:', error.message);
        res.status(500).json({ error: 'Server error' });
    }
};

// Function to delete a task by ID
exports.deleteTaskById = async (req, res) => {
    try {
        const taskId = req.params.taskId;
        const task = await Task.findByIdAndDelete(taskId);

        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }

        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
        console.error('Error deleting task:', error.message);
        res.status(500).json({ error: 'Server error' });
    }
};