'use strict';
const mongoose = require('mongoose');
const dbConnection = process.env.DB_CONNECTION || "mongodb://127.0.0.1:27017/webauthn";

console.log("dbConnection :", dbConnection);

mongoose.set('useCreateIndex', true);

mongoose.connect(dbConnection, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on('error', () => {
	console.log('> error occurred from the database');
});
db.once('open', () => {
	console.log('> successfully opened the database');
});
module.exports = mongoose;
