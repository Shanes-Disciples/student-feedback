const fs = require('file-system');
const courseData = require('./courseData.js');
const userDataGenerator = require('./userDataGenerator.js');
const reviewDataGenerator = require('./reviewDataGenerator.js');

const wstream = fs.writeFile('./data.csv');

const numOfUsers = 100000;
const userData = userDataGenerator(numOfUsers);