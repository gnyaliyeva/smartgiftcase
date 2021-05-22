import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { omit } from "lodash";

import Spinner from "../Spinners";

import "./style.scss";

/* eslint-disable react/button-has-type */
const Button = (props) => {
  const {
    children,
    href,
    className,
    primary,
    transparent,
    light,
    warm,
    dark,
    disabled,
    isLoading,
  } = props;
  const buttonClasses = classNames("button", className, {
    "button-primary": primary,
    "button-transparent": transparent,
    "button-light": light,
    "button-warm": warm,
    "button-dark": dark,
    "button-disabled": disabled || isLoading,
  });
  const linkClasses = classNames("link", className);
  const buttonProps = omit(
    props,
    "isLoading",
    "children",
    "primary",
    "transparent",
    "light",
    "warm",
    "dark",
    "disabled"
  );
  const linkProps = omit(buttonProps, "type");

  if (href) {
    return (
      <a
        href={props.href}
        {...linkProps}
        disabled={disabled || isLoading}
        className={linkClasses}
      >
        {isLoading ? <Spinner name="clip" size={21} /> : children}
      </a>
    );
  }
  return (
    <button
      {...buttonProps}
      className={buttonClasses}
      disabled={disabled || isLoading}
    >
      {isLoading ? <Spinner name="clip" size={21} /> : children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  primary: PropTypes.bool,
  transparent: PropTypes.bool,
  light: PropTypes.bool,
  warm: PropTypes.bool,
  dark: PropTypes.bool,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  type: PropTypes.string,
  className: PropTypes.string,
};

Button.defaultProps = {
  primary: false,
  transparent: false,
  light: false,
  warm: false,
  dark: false,
  disabled: false,
  type: "button",
};

export default Button;
