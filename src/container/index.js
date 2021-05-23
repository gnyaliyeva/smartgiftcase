import React, { useState } from "react";

import LOGO from "../assets/images/smartgiftlogo.svg";

import { getContext } from "../helpers/tools";

import Button from "../components/Button";
import Icon from "../components/Icon";
import Modal from "../components/Modal";
import ThemeTool from "../components/ThemeTool";

import HomePage from "./homepage";

import "./style.scss";

const Container = () => {
  const [results, setResults] = useState({});
  const [toggle, setToggle] = useState(false);

  const [modal, setModal] = useState({
    isOpen: true,
    message: (
      <div>
        Welcome on board!{" "}
        <Button primary onClick={() => setModal({ ...modal, isOpen: false })}>
          Let's go!
        </Button>
      </div>
    ),
    iconName: "gift",
  });

  return (
    <div className="app-container">
      <header>
        <img src={LOGO} alt="smartgift" id="smartgift-logo" />
        <Button transparent onClick={() => setToggle(!toggle)}>
          <Icon id="settings-icon" name="settings" width={26} />
        </Button>
      </header>
      <section id="main-content">
        <HomePage results={results} setResults={setResults} />
        {getContext(results)}
      </section>
      <Modal modal={modal} setModal={setModal} />
      {toggle && <ThemeTool setToggle={() => setToggle(false)} />}
    </div>
  );
};

export default Container;
