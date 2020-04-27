import React from 'react';
import PropTypes from 'prop-types';

const TextEl = ({
  as,

  className,
  children,

  align,
  color,
  size,
  weight,

  ...props
}) =>
  React.createElement(
    as,
    {
      className: `ms-text ms-text--color-${color} ms-text--size-${size} ms-text--weight-${weight}${
        align ? ` ms-text--align-${align}` : ''
      } ${className || ''}`,
      ...props,
    },
    children
  );

TextEl.defaultProps = {
  className: '',
  align: 'left',
  color: 'black',
  size: 'md',
  weight: 'regular',
};

TextEl.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,

  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'p', 'span']).isRequired,

  align: PropTypes.oneOf(['left', 'center', 'right']),
  color: PropTypes.oneOf(['black', 'gray-dark']),
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'larger']),
  weight: PropTypes.oneOf(['regular', 'medium']),
};

export default TextEl;
