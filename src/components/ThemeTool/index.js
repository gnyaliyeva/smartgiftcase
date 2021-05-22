import React from "react";
import PropTypes from "prop-types";

import { handleTheme, handleColor, handleFontSize } from "../../helpers/tools";

import Button from "../Button";
import Icon from "../Icon";

import "./style.scss";

const ThemeTool = ({ setToggle }) => {
  return (
    <div className="toggle-overlay">
      <div className="theme-tool-container">
        <Button id="close-button" transparent onClick={setToggle}>
          <Icon name="cancel" width={24} />
        </Button>
        <div className="palette-content">
          <div className="palette-title">Theme Options</div>
          <div className="theme-options-wrapper">
            <Button id="light" light onClick={handleTheme}>
              Light Mode
            </Button>
            <Button id="warm" warm onClick={handleTheme}>
              Warm Mode
            </Button>
            <Button id="dark" dark onClick={handleTheme}>
              Dark Mode
            </Button>
          </div>
          <div className="palette-title">Color Palette</div>
          <div className="color-options-wrapper">
            <Button transparent onClick={handleColor}>
              <div id="red" />
            </Button>
            <Button transparent onClick={handleColor}>
              <div id="yellow" />
            </Button>
            <Button transparent onClick={handleColor}>
              <div id="orange" />
            </Button>
            <Button transparent onClick={handleColor}>
              <div id="green" />
            </Button>
            <Button transparent onClick={handleColor}>
              <div id="blue" />
            </Button>
            <Button transparent onClick={handleColor}>
              <div id="purple" />
            </Button>
            <Button transparent onClick={handleColor}>
              <div id="pink" />
            </Button>
            <Button transparent onClick={handleColor}>
              <div id="maroon" />
            </Button>
            <Button transparent onClick={handleColor}>
              <div id="brown" />
            </Button>
          </div>
          <div className="size-options-wrapper">
            <div className="palette-title">Size Options</div>
            <Button id="size1" transparent onClick={handleFontSize}>
              size
            </Button>
            <Button id="size2" transparent onClick={handleFontSize}>
              size
            </Button>
            <Button id="size3" transparent onClick={handleFontSize}>
              size
            </Button>
            <Button id="size4" transparent onClick={handleFontSize}>
              size
            </Button>
            <Button id="size5" transparent onClick={handleFontSize}>
              size
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

ThemeTool.propTypes = {
  setToggle: PropTypes.func,
};

export default ThemeTool;
