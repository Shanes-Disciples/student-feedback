import React from 'react';
import moment from 'moment';
import ReviewStars from './ReviewStars.jsx';
import styles from '../styles/FeaturedReview.css';

class FeaturedReview extends React.Component {
  setUserPic() {
    const userpic = this.props.featuredReview.userpic;
    if (userpic.includes('https')) {
      return <img className={styles.reviewUserPic} src={userpic}></img>;
    }
    return <div className={styles.reviewUserInitials}>{userpic}</div>;
  }

  render() {
    if (this.props.featuredReview) {
      return (
        <div>
          <h2>Featured review</h2>
          <div className={styles.featuredReviewContainer}>
            <div className={styles.featuredReviewTopRow}>
              <div className={styles.featureReviewUserPic}>{this.setUserPic()}</div>
              <div className={styles.featuredReviewInfo}>
                <span className={styles.featuredReviewUsername}>
                  {this.props.featuredReview.username}
                </span>
                <span>( {this.props.featuredReview.course_count} courses,</span>
                <span> {this.props.featuredReview.review_count} reviews )</span>
                <ReviewStars starStyle={{ fontSize: '13px', margin: '2px' }} rating={this.props.featuredReview.rating} />
                <div>{moment(this.props.featuredReview.createdat).fromNow()}</div>
              </div>
            </div>
            <div>{this.props.featuredReview.review}</div>
          </div>
        </div>
      );
    }

    return (
      <div>
        <h2>Featured review</h2>
        <p><i>There are no featured reviews for this course yet...</i></p>
      </div>
    );
  }
}


export default FeaturedReview;
