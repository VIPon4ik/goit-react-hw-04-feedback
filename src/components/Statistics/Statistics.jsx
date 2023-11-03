import { Component } from 'react';
import PropTypes from 'prop-types';
import { Notification } from 'components/Notification/Notification';

export class Statistics extends Component {
  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
  };

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <div>
        {total !== 0 ? (
          <div>
            <h2>Statistics</h2>
            <ul>
              <li>
                <p>Good: {good}</p>
              </li>
              <li>
                <p>Neutral: {neutral}</p>
              </li>
              <li>
                <p>Bad: {bad}</p>
              </li>
              <li>
                <p>Total: {total}</p>
              </li>
              {positivePercentage && (
                <li>
                  <p>Positive feedback: {positivePercentage} %</p>
                </li>
              )}
            </ul>
          </div>
        ) : (
          <Notification />
        )}
      </div>
    );
  }
}
