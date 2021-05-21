import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { omit } from "lodash";

import "./style.scss";

const TextInput = (props) => {
  const { className, info, placeholder } = props;
  const classes = classNames("input-container text-input-container", className);
  const inputProps = omit(
    props,
    "className",
    "iconName",
    "info",
    "placeholder"
  );

  return (
    <div className={classes}>
      <div className="input-box">
        <input
          {...inputProps}
          type={"text"}
          className="input"
          placeholder={placeholder}
        />
        {placeholder && (
          <span className="input-box__header">{placeholder}</span>
        )}
      </div>
      {info && <label className="input-info">{info}</label>}
    </div>
  );
};

TextInput.propTypes = {
  className: PropTypes.string,
  info: PropTypes.node,
  placeholder: PropTypes.node,
};

export default TextInput;
