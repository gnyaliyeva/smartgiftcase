import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { omit } from 'lodash';

import Spinner from '../Spinners';

import './style.scss';

/* eslint-disable react/button-has-type */
const Button = props => {
  const {
    children,
    href,
    className,
    primary,
    secondary,
    transparent,
    disabled,
    isSubmitting,
    small,
  } = props;
  const buttonClasses = classNames('button', className, {
    'button-primary': primary,
    'button-secondary': secondary,
    'button-transparent': transparent,
    'button-disabled': disabled || isSubmitting,
    'button-small': small,
  });
  const linkClasses = classNames('link', className);
  const buttonProps = omit(
    props,
    'isSubmitting',
    'children',
    'primary',
    'transparent',
    'small',
    'disabled',
  );
  const linkProps = omit(buttonProps, 'type');

  if (href) {
    return (
      <Link
        to={props.href}
        {...linkProps}
        disabled={disabled || isSubmitting}
        className={linkClasses}
      >
        {isSubmitting ? (
          <Spinner name="clip" size={small ? 14 : 21} />
        ) : (
          children
        )}
      </Link>
    );
  }
  return (
    <button
      {...buttonProps}
      className={buttonClasses}
      disabled={disabled || isSubmitting}
    >
      {isSubmitting ? <Spinner name="clip" size={small ? 14 : 21} /> : children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  transparent: PropTypes.bool,
  disabled: PropTypes.bool,
  isSubmitting: PropTypes.bool,
  small: PropTypes.bool,
  type: PropTypes.string,
  className: PropTypes.string,
};

Button.defaultProps = {
  primary: false,
  secondary: false,
  transparent: false,
  disabled: false,
  small: false,
  type: 'button',
};

export default Button;
