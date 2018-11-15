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

const db = require('../database/sequelizeSetup.js');

//app.get to get a specific review
app.get('/:courseId/reviews/:reviewId', (req, res) => {
  let reviewId = req.params.reviewId;

});

//make app.post to add a new review
app.post('/:courseId/reviews/', (req, res) => {

});

const updateReview = require('./serverModel.js');

//make app.put to edit a review
app.put('/:courseId/reviews/:reviewId', (req, res) => {
  let review = req.params.reviewId;
  updateReview()

};

// app.delete to delete a review
// do I need to decrement the matching user review count?
app.delete('/:courseId/reviews/:reviewId', (req, res) => {
  let review = req.params.reviewId;
  db.Reviews.destroy({
    where: {
      reviewId: review
    }
  });
});

//app.get to get a specific user's reviews
app.get('/users/:userId', (req, res) => {

})


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
