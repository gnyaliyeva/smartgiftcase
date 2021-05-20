import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Select from 'react-select';

import Icon from '../Icon';

import './style.scss';

const DropdownIndicator = props => (
  <Icon
    name={props.selectProps.menuIsOpen ? 'selectUp' : 'selectDown'}
    width={10}
    color="#333333"
  />
);

DropdownIndicator.propTypes = {
  selectProps: PropTypes.object,
  menuIsOpen: PropTypes.bool,
};

const CustomOption = props => {
  const { isDisabled, innerProps } = props;

  return (
    <div>
      {!isDisabled ? (
        <div {...innerProps} className="option-item">
          {props.data.label || props.data.name}
        </div>
      ) : null}
    </div>
  );
};

CustomOption.propTypes = {
  isDisabled: PropTypes.bool,
  innerProps: PropTypes.object,
  data: PropTypes.object,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),
};

const SelectInput = props => {
  const {
    className,
    placeholder,
    value,
    onChangeValue,
    options,
    name,
    optionKey,
    isClearable,
    isSearchable,
    ...selectProps
  } = props;
  const selectInputRef = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const classes = classNames(
    'select-input-container',
    {
      'selected-value': (value || value === 0) && placeholder,
    },
    className,
  );
  const headerClasses = classNames({
    'menu-open': isMenuOpen,
  });

  return (
    <div className={classes}>
      <Select
        {...selectProps}
        inputId={name}
        ref={selectInputRef}
        getOptionLabel={option => option.name}
        options={options}
        value={options.find(option => option[optionKey] === value)}
        onChange={onChangeValue}
        className="select-input"
        components={{ DropdownIndicator, Option: CustomOption }}
        isSearchable={isSearchable}
        isClearable={isClearable}
        onMenuOpen={() => setIsMenuOpen(true)}
        onMenuClose={() => setIsMenuOpen(false)}
      />
      {placeholder && (
        <div className={`select-input-header ${headerClasses}`}>
          {placeholder}
        </div>
      )}
    </div>
  );
};

export default SelectInput;

SelectInput.propTypes = {
  className: PropTypes.string,
  options: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  placeholder: PropTypes.node,
  onChangeValue: PropTypes.func,
  isClearable: PropTypes.bool,
  isSearchable: PropTypes.bool,
  name: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),
  optionKey: PropTypes.string,
};

SelectInput.defaultProps = {
  className: '',
  options: [],
  name: '',
  isClearable: false,
  isSearchable: true,
  optionKey: 'code',
};

Select.defaultProps = {
  isSearchable: false,
  isClearable: true,
  classNamePrefix: true,
  closeMenuOnSelect: true,
  placeholder: 'Select',
};
