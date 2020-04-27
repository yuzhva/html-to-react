import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ className, fullWidth, ...props }) => (
  <input
    className={`ms-input${fullWidth ? ' ms-input--full-width' : ''} ${
      className || ''
    }`}
    type="text"
    {...props}
  />
);

Input.defaultProps = {
  className: '',
  fullWidth: false,
};

Input.propTypes = {
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
};

export default Input;
