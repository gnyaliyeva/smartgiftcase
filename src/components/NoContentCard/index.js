import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';

import './style.scss';

const NoContentCard = ({ iconName, iconSize, message }) => (
  <div className="no-content-card-container">
    <Icon name={iconName} width={iconSize} />
    <div className="no-content-text">{message}</div>
  </div>
);

NoContentCard.propTypes = {
  iconName: PropTypes.string,
  iconSize: PropTypes.number,
  message: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};

NoContentCard.defaultProps = {
  iconName: 'sadFace',
  iconSize: 52,
  message: 'There is no content',
};

export default NoContentCard;
