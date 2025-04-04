const mongoose = require('mongoose');

const MONGO_USERNAME = 'root';
const MONGO_PASSWORD = 'example';
const MONGO_HOSTNAME = 'mongodb';
const MONGO_PORT = '27017';

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}?authSource=admin`;

//mongoose.connect(url, {useNewUrlParser: true})

mongoose.connect('mongodb://root:example@mongodb:27017?authSource=admin', {useNewUrlParser: true})
