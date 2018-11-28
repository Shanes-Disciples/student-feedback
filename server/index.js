require('newrelic');
const express = require('express');
const expressStaticGzip = require('express-static-gzip');
const bodyParser = require('body-parser');
const path = require('path');

const { getReviewData, updateReview, getSingleReview, removeReview, createReview , getUserReviews} = require('./serverModel.js');

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

app.get('/:courseId/reviews', (req, res) => {
  const { courseId } = req.params;
  getReviewData(courseId, res);
});


//Routes for REVIEWS ***********************************************

//app.get to get a specific review
app.get('/:courseId/reviews/:reviewId', (req, res) => {
  let reviewId = req.params.reviewId;
  getSingleReview(reviewId, res)
});


//make app.put to edit an existing review
app.put('/:courseId/reviews/:reviewId', (req, res) => {
  let review = req.body;
  let id = req.params.reviewId
  updateReview(review, id, res)
});


//make app.post to add a review
app.post('/:courseId/reviews/', (req, res) => {
  let courseId = req.params;
  const review = req.body;
  createReview(courseId, review, res)
});

// app.delete to delete a review
app.delete('/:courseId/reviews/:reviewId', (req, res) => {
  let reviewId = req.params.reviewId;
  console.log(reviewId)
  removeReview(reviewId, res)
});


app.get('/courses/:userId', (req, res) => {
  let userId = req.params;
  getUserReviews(userId, res);
});


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
