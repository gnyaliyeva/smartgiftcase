import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { icons } from './icons';

const Icon = props => {
  const { className, color } = props;
  const classes = classNames('icon', className);

  return (
    <svg
      {...props}
      fill={color}
      className={classes}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
    >
      <path d={icons[props.name]} />
    </svg>
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  color: PropTypes.string,
};

export default Icon;
