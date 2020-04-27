import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ className, children, fullWidth, ...props }) => (
  <button
    className={`ms-btn${fullWidth ? ' ms-btn--full-width' : ''} ${
      className || ''
    }`}
    type="button"
    {...props}
  >
    {children}
  </button>
);

Button.defaultProps = {
  className: '',
  fullWidth: false,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
};

export default Button;
