import { Component } from "react";
import PropTypes from "prop-types";

export class Section extends Component {
  static defaultProps = {
    title: "Please leave a feedback"
  }

  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
  }

  render() {
    const { title, children } = this.props;

    return(
      <section>
        <h1>{title}</h1>
        { children }
      </section>
    )
  }
}