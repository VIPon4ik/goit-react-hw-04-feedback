import { Component } from 'react';
import PropTypes from 'prop-types';
import { Notification } from 'components/Notification/Notification';
import { StatisticList } from './Statistics.styled';

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
            <StatisticList>
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
            </StatisticList>
          </div>
        ) : (
          <Notification />
        )}
      </div>
    );
  }
}
