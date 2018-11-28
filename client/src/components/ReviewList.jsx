import React from 'react';
import Review from './Review.jsx';
import styles from '../styles/ReviewList.css';

class ReviewList extends React.Component {
  showVisibleReviews() {
    const visibleReviews = this.props.filteredReviews.slice(0, this.props.numOfReviewsToShow);
    const visibleReviewsDivs = visibleReviews.map(review => (
      <div key={review.user_id}>
        <Review reviewData={ review } />
      </div>
    ));

    return visibleReviewsDivs;
  }

  showSeeMoreButton() {
    if (this.props.filteredReviews.length <= this.props.numOfReviewsToShow) {
      return null;
    }
    return <button className={styles.seeMoreButton}
      onClick={() => (this.props.addTen())}>See more reviews</button>;
  }

  render() {
    const reviews = this.showVisibleReviews();
    if (reviews.length) {
      return (
        <div>
          <div className={styles.reviewsContainer}>
              {reviews}
          </div>
          <div className={styles.seeMoreButtonHolder}>
              {this.showSeeMoreButton()}
          </div>
        </div>
      );
    }

    return <p>No reviews matched your search. Try searching with another term.</p>;
  }
}

export default ReviewList;
