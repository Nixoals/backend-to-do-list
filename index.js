const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI);

const app = express();
app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
	try {
		res.status(200).json('Welcom to my website');
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

const taskRoute = require('./routes/task');
app.use(taskRoute);

app.all('*', (req, res) => {
	try {
	} catch (error) {
		res.status(400).json({ message: 'this route does not exist' });
	}
});

const port = 4000;

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
