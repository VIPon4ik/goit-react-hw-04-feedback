import { Component } from "react";
import PropTypes from "prop-types";

export class Notification extends Component {
  static defaultProps = {
    message: "No feedback given"
  }

  static propTypes = {
    message: PropTypes.string,
  }

  render() {
    const { message } = this.props;
    return <p>{message}</p>
  }
}