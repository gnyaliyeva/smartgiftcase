import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import ClipLoader from "react-spinners/ClipLoader";

import "./style.scss";

const loaders = {
  clip: ClipLoader,
};

const Spinner = ({ name, style, center, ...props }) => {
  const Component = loaders[name];

  const classes = classNames("spinner-container", name, {
    center,
  });

  return (
    <div style={style} className={classes}>
      <Component {...props} />
    </div>
  );
};

Spinner.propTypes = {
  name: PropTypes.string,
  center: PropTypes.bool,
  style: PropTypes.object,
};

export default Spinner;
