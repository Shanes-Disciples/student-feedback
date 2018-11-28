import React from 'react';
import moment from 'moment';
import ReviewStars from './ReviewStars.jsx';
import styles from '../styles/Review.css';

class Review extends React.Component {
  setReviewText() {
    const { review } = this.props.reviewData;
    if (review.length) {
      return (
        <div>
          {review}
        </div>
      );
    }
    return (
      <div>
        {review}
      </div>
    );
  }

  setUserPic() {
    const userpic = this.props.reviewData.userpic;
    if (userpic.includes('https')) {
      return <img className={styles.reviewUserPic} src={userpic}></img>;
    }
    return <div className={styles.reviewUserInitials}>{userpic}</div>;
  }

  render() {
    return (
      <div className={styles.individualReviewContainer}>
        <div className={styles.reviewUserInfo}>
          {this.setUserPic()}
          <span className={styles.reviewInfo}>
            <div className={styles.reviewDate}>{moment(this.props.reviewData.date).fromNow()}</div>
            <div>{this.props.reviewData.username}</div>
          </span>
        </div>
        <div className={styles.reviewRatingAndText}>
          <div className={styles.reviewStars}>
            <ReviewStars starStyle={{ fontSize: '15px', margin: '0 2px 0 0' }} rating={Number(this.props.reviewData.rating)} />
          </div>
          {this.setReviewText()}
        </div>
      </div>
    );
  }
}

export default Review;
