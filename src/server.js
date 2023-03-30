const mongoose = require('mongoose');
const connectDB = require('./utils/dbConnection');

connectDB();

mongoose.connection.once('open', () => {
		console.log("Connected to MongoDB");
})

mongoose.connection.on('error', err => {
		console.error(err);
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})