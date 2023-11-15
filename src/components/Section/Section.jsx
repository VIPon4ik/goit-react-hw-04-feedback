import PropTypes from 'prop-types';

import React from 'react';

export const Section = ({ title = 'Please leave a feedback', children }) => {
  return (
    <section>
      <h1>{title}</h1>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;