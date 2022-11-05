const mongoose = require('mongoose');

const Task = mongoose.model('Task', {
	task: { type: String },
	checked: { type: Boolean, default: false },
});

module.exports = Task;
