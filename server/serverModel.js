const db = require('../database/pgindex.js').client;


// const flattenReviewData = (data) => {
//   const reviewDataWithNestedUserObj = data.map(row => (row.dataValues));
//   const reviewData = reviewDataWithNestedUserObj.map((row) => {
//     row.user = row.user.dataValues;
//     row.rating = Number(row.rating);
//     return row;
//   });
//   return reviewData;
// };

const calcCourseStats = (reviewData) => {
  const sumRating = reviewData.reduce((sum, review) => (sum + Number(review.rating)), 0);
  const totalRatings = reviewData.length;
  const avgRating = Number((sumRating / totalRatings).toFixed(2));
  const summaryStats = reviewData.reduce((obj, review) => {
    let { rating } = review;
    rating = Math.floor(rating);
    obj[rating] += (1 / totalRatings) * 100;
    return obj;
  }, {
    avg: avgRating,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  });

  return summaryStats;
};

// Review must have a +/- over 60 to be considered a featured review. If course has
// no reviews that high then it doesn't have a featured review
const findFeaturedReview = (reviewData) => {
  let featuredReview = reviewData.reduce((featured, review) => {
    const featuredPowerRanking = featured.upvotes - featured.downvotes;
    const currentReviewPowerRanking = review.upvotes - review.downvotes;
    if (currentReviewPowerRanking > featuredPowerRanking) { featured = review; }
    return featured;
  }, { upvotes: 60, downvotes: 0 });

  // if (featuredReview.user_id === undefined) { featuredReview = null; }
  featuredReview.rating = Number(featuredReview.rating) || 5;
  return featuredReview;
};

const removeFeaturedReviewFromList = (featuredReview, reviewData) => (
  reviewData.filter(review => (review.user_id !== featuredReview.user_id))
);

const getReviewData = (courseId, res) => {
  db.query(`SELECT * FROM reviews INNER JOIN users ON users.user_id = reviews.user_id WHERE course_id = ${courseId};`)
    .then((data) => {
      const courseStats = calcCourseStats(data.rows);
      const featuredReview = findFeaturedReview(data.rows);
      const reviews = removeFeaturedReviewFromList(featuredReview, data.rows);
      res.send({ courseStats, featuredReview, reviews });
    })
    .catch((err) => { console.log(err) });
};


const getSingleReview = (reviewId, res) => {
  db.query(`SELECT * FROM reviews WHERE review_id = ${reviewId};`)
  .then((data) => {
  res.send(data)
  })
  .catch((err) => { console.log(err) });
};


const createReview = (courseId, review, res) => {
  let date = new Date();
  db.query(`INSERT INTO reviews (course_id, user_id, rating, review, date, upvotes, downvotes, reported)
            VALUES (${courseId}, ${review.user_id}, ${review.rating}, '${review.review}', '${date}', 0, 0, 0);`
          )
  .then(console.log("Successfully created review"))
  .then(res.sendStatus(201))
  .catch((err) => { console.log(err) })
};


const removeReview = (reviewId, res) => {
  db.query(`DELETE FROM reviews WHERE review_id = ${reviewId};`)
  .then(console.log("Review successfully deleted"))
  .then(res.sendStatus(200))
  .catch(console.log("Error deleting review"))
};

const getUserReviews = (userId, res) => {
  db.query(`SELECT * FROM reviews WHERE user_id = ${userId};`)
  .then((data) => {
    res.send(data)
  })
  .catch((err) => { console.log(err) })
}

const updateReview = (review, id, res) => {
  res.sendStatus(405)
}


module.exports = {
  getReviewData,
  getSingleReview,
  createReview,
  removeReview,
  getUserReviews,
  updateReview
} 

