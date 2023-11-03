import { Component } from 'react';
import PropTypes from "prop-types";

export class FeedbackOptions extends Component {
  static propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
  }
  
  render() {
    const { onLeaveFeedback } = this.props;

    return (
      <ul>
        <li>
          <button
            type="button"
            name="good"
            onClick={onLeaveFeedback}
          >
            Good
          </button>
        </li>
        <li>
          <button
            type="button"
            name="neutral"
            onClick={onLeaveFeedback}
          >
            Neutral
          </button>
        </li>
        <li>
          <button type="button" name="bad" onClick={onLeaveFeedback}>
            Bad
          </button>
        </li>
      </ul>
    );
  }
}
