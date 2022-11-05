const express = require('express');
const Task = require('../models/Task');

const router = express.Router();

// add task
router.post('/task', async (req, res) => {
	try {
		const task = req.body;
		const newTask = new Task(task);
		await newTask.save();
		res.status(200).json(newTask);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

// delete task
router.delete('/delete-task/:id', async (req, res) => {
	try {
		const taskId = req.params.id;
		const deleteTask = await Task.findByIdAndDelete(taskId);
		res.status(200).json({
			message: 'task successfully deleted',
		});
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

//get task
router.get('/task', async (req, res) => {
	try {
		const tasks = await Task.find();
		res.status(200).json(tasks);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

//task Checked
router.post('/task-checked/:id/:state', async (req, res) => {
	try {
		const { id, state } = req.params;
		const checkedTask = await Task.findById(id);
		checkedTask.checked = state;
		checkedTask.save();
		res.status(200).json(checkedTask);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

module.exports = router;
