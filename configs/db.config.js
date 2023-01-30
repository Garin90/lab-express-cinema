const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/ih-movies';

mongoose.connect(MONGODB_URI)
    .then(() => {
        console.info(`Succesfully connected to the database: ${MONGODB_URI}`)
    })
    .catch((error) => {
        console.error(`An error occurred during database process connection to the data base ${MONGODB_URI}: ${error}`)
    });