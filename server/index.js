require('newrelic');
const express = require('express');
const expressStaticGzip = require('express-static-gzip');
const bodyParser = require('body-parser');
const path = require('path');

const { getReviewData, updateReview, getSingleReview } = require('./serverModel.js');

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
// consider migrating this functionality to server models for unity 
app.delete('/:courseId/reviews/:reviewId', (req, res) => {
  let review = req.body
  db.Reviews.destroy({
    where: { review },
  }).then(() => res.sendStatus(200))
});

// const db = require('../database/sequelizeSetup.js');

app.get('/:courseId/user/:id', (req, res) => {
  console.log("Success!")
  // db.Users.findOne({where: { user_id: 25 }})
  .then((data => {
    res.send(data)
  }));
});


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
