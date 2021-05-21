import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Select from "react-select";

import Icon from "../Icon";

import "./style.scss";

const DropdownIndicator = (props) => (
  <Icon
    name={props.selectProps.menuIsOpen ? "selectUp" : "selectDown"}
    width={10}
    color="#333333"
  />
);

DropdownIndicator.propTypes = {
  selectProps: PropTypes.object,
  menuIsOpen: PropTypes.bool,
};

const CustomOption = (props) => {
  const { isDisabled, innerProps } = props;

  return (
    <div>
      {!isDisabled ? (
        <div {...innerProps} className="option-item">
          {props.data.label}
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

const SelectInput = (props) => {
  const { className, placeholder, value, ...selectProps } = props;
  const selectInputRef = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const classes = classNames(
    "select-input-container",
    {
      "selected-value": value && placeholder,
    },
    className
  );
  const headerClasses = classNames({
    "menu-open": isMenuOpen,
  });
  return (
    <div className={classes}>
      <Select
        {...selectProps}
        ref={selectInputRef}
        value={value}
        className="select-input"
        components={{ DropdownIndicator, Option: CustomOption }}
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
  placeholder: PropTypes.node,
  value: PropTypes.object,
  options: PropTypes.array,
  onChangeValue: PropTypes.func,
};

SelectInput.defaultProps = {
  className: "",
  options: [],
};

Select.defaultProps = {
  isSearchable: false,
  isClearable: false,
  classNamePrefix: true,
  closeMenuOnSelect: true,
  placeholder: "Select Your Choise",
};
