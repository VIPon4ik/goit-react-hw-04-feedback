import { Component } from 'react';
import PropTypes from 'prop-types';
import { ButtonList, Button } from './FeedbackOptions.styled';

export class FeedbackOptions extends Component {
  static propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  render() {
    const { onLeaveFeedback, options } = this.props;

    return (
      <ButtonList>
        {options.map(option => {
          return (
            <li key={option}>
              <Button type="button" name={option} onClick={onLeaveFeedback}>
                {option}
              </Button>
            </li>
          );
        })}
      </ButtonList>
    );
  }
}
