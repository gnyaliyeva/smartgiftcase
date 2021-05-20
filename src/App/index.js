import React, { useState, useEffect } from "react";

import LOGO from "../images/smartgiftlogo.svg";

import SelectInput from "../components/SelectInput";
import Button from "../components/Button";

import { getProductsApi } from "./api";

import "./style.scss";

function App() {
  // useEffect(() => {
  //   const query = '?merchantCode=vineyardvines&codes[]=1K000006'
  //   getProductsApi(query);
  // }, [])

  return (
    <div className="app-container">
      <header>
        <img src={LOGO} alt="smartgift" id="smartgift-logo" />
      </header>
      <section id="main-content">
        <div className="section-col">
          <div className="product-image-wrapper">image</div>
          <div className="description-wrapper">
            <div className="description-wrapper--title">Product Details</div>
            <p className="description-wrapper--text">
              Elit ea nostrud ut adipisicing anim in Lorem. Do duis irure
              aliquip consectetur anim et eu Lorem ullamco. Incididunt cupidatat
              anim nisi id consectetur ut laboris nulla. Voluptate aute
              voluptate deserunt aliqua Lorem cillum incididunt deserunt veniam
              cupidatat. Aute excepteur exercitation reprehenderit ex officia
              minim mollit reprehenderit minim nisi do fugiat excepteur aliqua.
              Proident id pariatur eiusmod nisi deserunt cupidatat pariatur ea
              ipsum.
            </p>
          </div>
        </div>
        <div className="section-col">
          <div className="product--title">Product Name</div>
          <SelectInput placeholder="Size"/>
          <SelectInput placeholder="Color"/>
          <Button primary>Accept</Button>
        </div>
      </section>
    </div>
  );
}

export default App;
