import { Component } from 'react';
import PropTypes from 'prop-types';
import { ButtonList, Button } from './FeedbackOptions.styled';

export class FeedbackOptions extends Component {
  static propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  render() {
    const { onLeaveFeedback } = this.props;

    return (
      <ButtonList>
        <li>
          <Button type="button" name="good" onClick={onLeaveFeedback}>
            Good
          </Button>
        </li>
        <li>
          <Button type="button" name="neutral" onClick={onLeaveFeedback}>
            Neutral
          </Button>
        </li>
        <li>
          <Button type="button" name="bad" onClick={onLeaveFeedback}>
            Bad
          </Button>
        </li>
      </ButtonList>
    );
  }
}
