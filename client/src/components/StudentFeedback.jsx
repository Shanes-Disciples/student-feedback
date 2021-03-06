import React from 'react';
import GraphBarAndStars from './GraphBarAndStars.jsx';
import SummaryStars from './SummaryStars.jsx';
import styles from '../styles/StudentFeedback.css';

class StudentFeedback extends React.Component {
  createFiveGraphRows() {
    const graphRows = [];
    for (let i = 5; i > 0; i -= 1) {
      graphRows.push(
      <GraphBarAndStars key={i} ratingFilter={() => (this.props.ratingFilter(i))}
        percent={ this.props.stats[i] } selectedStar={ this.props.selectedStar } currentStar={i} />,
      );
    }
    return graphRows;
  }


  render() {
    return (
      <div>
        <h2>Student feedback</h2>
        <div className={styles.studentFeedbackContainer}>
          <div className={styles.studentFeedbackAverageContainer}>
            <div className={styles.studentFeedbackAverage}>
              {this.props.stats.avg.toFixed(1)}
            </div>
            <div className={styles.studentFeedbackAverageStars}>
              <SummaryStars starStyle={{ fontSize: '19px', margin: '3px' }} rating={this.props.stats.avg}/>
            </div>
            <div>Course Rating</div>
          </div>
          <div className={styles.studentFeedbackBarGraph}>
            {this.createFiveGraphRows()}
          </div>
        </div>
      </div>
    );
  }
}

export default StudentFeedback;
