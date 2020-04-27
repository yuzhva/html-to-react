import React from 'react';
import PropTypes from 'prop-types';

const Spacing = ({ className, type, size, ...props }) => (
  <span
    className={`ms-sp ms-sp-${type}--${size} ${className || ''}`}
    {...props}
  />
);

Spacing.defaultProps = {
  className: '',
  size: 20,
};

Spacing.propTypes = {
  className: PropTypes.string,

  type: PropTypes.oneOf([
    'm', // margin
    'p', // padding

    // margin
    'mt', // top
    'mr', // right
    'mb', // bottom
    'ml', // left

    'mv', // vertical
    'mh', // horizontal

    // padding
    'pt', // top
    'pr', // right
    'pb', // bottom
    'pl', // left

    'pv', // vertical
    'ph', // horizontal
  ]).isRequired,
  size: PropTypes.oneOf([5, 20, 35]),
};

export default Spacing;
