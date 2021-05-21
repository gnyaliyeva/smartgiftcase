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
    disabled,
    isLoading,
  } = props;
  const buttonClasses = classNames("button", className, {
    "button-primary": primary,
    "button-transparent": transparent,
    "button-disabled": disabled || isLoading,
  });
  const linkClasses = classNames("link", className);
  const buttonProps = omit(
    props,
    "isLoading",
    "children",
    "primary",
    "transparent",
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
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  type: PropTypes.string,
  className: PropTypes.string,
};

Button.defaultProps = {
  primary: false,
  transparent: false,
  disabled: false,
  type: "button",
};

export default Button;
