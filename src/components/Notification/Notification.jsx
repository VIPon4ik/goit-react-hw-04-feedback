import PropTypes from 'prop-types';

import React from 'react';

export const Notification = ({ message = 'No feedback given' }) => {
  return <p>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
