const express = require('express');
const Task = require('../models/Task');

const router = express.Router();

// add task
router.post('/task', async (req, res) => {
	try {
		const task = req.body.task;
		const newTask = new Task({ task: task });
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

router.get('/task', async (req, res) => {
	try {
		const tasks = await Task.find();

		res.status(200).json(tasks);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

module.exports = router;
