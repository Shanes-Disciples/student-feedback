require('newrelic');
const cluster = require('cluster');
  //Code to run if we’re in the master process
  if (cluster.isMaster) {
    // Count the machine’s CPUs
    var cpuCount = require('os').cpus().length;
    // Create a worker for each CPU
    for (var i = 0; i < cpuCount; i += 1) {
        cluster.fork();
    }
  // Code to run if we’re in a worker process
  } else {

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const compression = require('compression');

const { getReviewData, updateReview, getSingleReview, removeReview, createReview , getUserReviews} = require('./serverModel.js');

const app = express();
const PORT = 3002;

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/courses/:courseId', express.static(path.join(__dirname, '/../public/')));


app.get('/:courseId/reviews', (req, res) => {
  const { courseId } = req.params;
  getReviewData(courseId, res);
});


//New Routes for Reviews && Users ********************************

//Get a specific review
app.get('/:courseId/reviews/:reviewId', (req, res) => {
  let reviewId = req.params.reviewId;
  getSingleReview(reviewId, res)
});

//Update a specific review
app.put('/:courseId/reviews/:reviewId', (req, res) => {
  let review = req.body;
  let id = req.params.reviewId
  updateReview(review, id, res)
});


//Create a newd review
app.post('/:courseId/reviews/', (req, res) => {
  let courseId = req.params.courseId;
  const review = req.body;
  createReview(courseId, review, res)
});

//Delete a review
app.delete('/:courseId/reviews/:reviewId', (req, res) => {
  let reviewId = req.params.reviewId;
  removeReview(reviewId, res)
});

//Get all of a user's reviews
app.get('/users/:userId', (req, res) => {
  let userId = req.params.userId;
  getUserReviews(userId, res);
});


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

};