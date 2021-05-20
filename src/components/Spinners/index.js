import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SyncLoader from 'react-spinners/SyncLoader';
import ClipLoader from 'react-spinners/ClipLoader';

import './style.scss';

const loaders = {
  sync: SyncLoader,
  clip: ClipLoader,
};

const Spinner = ({ name, style, center, ...props }) => {
  const Component = loaders[name];

  const classes = classNames('spinner-container', name, {
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
  color: PropTypes.string,
  size: PropTypes.number,
  center: PropTypes.bool,
  style: PropTypes.object,
};

Spinner.defaultProps = {
  color: '#0f878d',
  size: 14,
};

export default Spinner;
