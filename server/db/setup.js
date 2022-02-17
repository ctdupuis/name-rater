const mongoose = require('mongoose');
require('dotenv').config();

const startDB = async () => {
	const CONNECTION_URL = process.env.CONNECTION_URL;
	try {
		await mongoose.connect(CONNECTION_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		});
		console.log("DB connection secured");
	} catch (err) {
		console.log("Error:", err)
	}
};

exports.db = startDB;