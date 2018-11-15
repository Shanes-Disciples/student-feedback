const express = require('express');
const expressStaticGzip = require('express-static-gzip');
const bodyParser = require('body-parser');
const path = require('path');

const getReviewData = require('./serverModel.js');

const app = express();
const PORT = 3002;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use('/courses/:courseId', express.static(path.join(__dirname, '/../public/')));
app.use('/courses/:courseId', expressStaticGzip(path.join(__dirname, '/../public/'), {
  enableBrotli: true,
  customCompressions: [{
    encodingName: 'deflate',
    fileExtension: 'zz',
  }],
  orderPreference: ['br'],
}));

//this is the search
app.get('/:courseId/reviews', (req, res) => {
  const { courseId } = req.params;
  getReviewData(courseId, res);
});


//Routes for REVIEWS ***********************************************

//app.get to get a specific review
app.get('/:courseId/reviews/:reviewId', (req, res) => {

});

//make app.post to add a new review
app.post('/:courseId/reviews/', (req, res) => {

});

//make app.put to edit a review
app.put('/:courseId/reviews/:reviewId', (req, res) => {

});

//app.delete to delete a review
app.delete('/:courseId/reviews/:reviewId', (req, res) => {

});

//Routes for USERS *************************************************

//app.get to get a specific user
app.get('/users/:userId', (req, res) => {

})

//make app.post to add a new user
app.post('/users/', (req, res) => {

});

//make app.put to edit a user
app.put('/users/:userId/', (req, res) => {

});

//app.delete to delete a user
app.delete('/users/:userId', (req, res) => {

});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
