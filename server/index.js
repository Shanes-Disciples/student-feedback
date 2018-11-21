const express = require('express');
const expressStaticGzip = require('express-static-gzip');
const bodyParser = require('body-parser');
const path = require('path');

const getReviewData = require('./serverModel.js');
const updateReview = require('./serverModel.js');
const getSingleReview = require('./serverModel.js');

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

const db = require('../database/sequelizeSetup.js');

//app.get to get a specific review
app.get('/:courseId/reviews/:reviewId', (req, res) => {
  let reviewId = req.body;
  if (reviewId === undefined) {
    res.sendStatus(400).end();
  } else {
  getSingleReview(reviewId, res)
  };
});

//make app.post to add a new review
app.post('/:courseId/reviews/', (req, res) => {
  res.sendStatus(405);
});


//make app.put to edit a review
app.put('/:courseId/reviews/:reviewId', (req, res) => {
  const reviewId = req.body.reviewId;
  const review = req.body.review;
  if (reviewId || review === undefined) {
    res.sendStatus(400);
  } else {
  updateReview(reviewId, review, res)
  }
});

// app.delete to delete a review
// do I need to decrement the matching user review count?
// consider migrating this functionality to server models for unity 
app.delete('/:courseId/reviews/:reviewId', (req, res) => {
  let review = req.body
  db.Reviews.destroy({
    where: { review },
  }).then(() => res.sendStatus(200))
});


//app.get to get a specific user's reviews **Stretch Goal**
app.get('/users/:userId', (req, res) => {
  res.sendStatus(405);
});


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
