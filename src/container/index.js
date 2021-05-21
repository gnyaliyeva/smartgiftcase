import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

import LOGO from "../assets/images/smartgiftlogo.svg";

import Button from "../components/Button";
import Modal from "../components/Modal";
import NoContentCard from "../components/NoContentCard";
import TextInput from "../components/TextInput";

import Content from "./content";
import { getProducts } from "../helpers/api";
import { FAIL, SUCCESS } from "../helpers/constants";

import "./style.scss";

const Container = () => {
  const { code } = useParams();
  const [productCode, setProductCode] = useState(code || "");
  const [merchantCode, setMerchantCode] = useState("vineyardvines");
  const [results, setResults] = useState({});
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

  const handleProducts = () => {
    let codes = "";
    productCode.split(",").map((item) => (codes += `&codes[]=${item}`));
    const query = `?merchantCode=${merchantCode}${codes}`;
    getProducts(query, setResults);
  };

  const getContext = () => {
    let message = "There is no product to show";
    if (results.status === SUCCESS && results.data.length) {
      return results.data.map((product, key) => (
        <Content key={key.toString()} {...product} />
      ));
    } else if (results.status === FAIL) {
      message = results.data;
    }
    return <NoContentCard message={message} />;
  };

  return (
    <div className="app-container">
      <header>
        <img src={LOGO} alt="smartgift" id="smartgift-logo" />
      </header>
      <section id="main-content">
        <div className="text-inputs-wrapper">
          <TextInput
            placeholder="Merchant Code"
            value={merchantCode}
            onChange={(e) => setMerchantCode(e.target.value)}
          />
          <TextInput
            placeholder="Product Code"
            value={productCode}
            onChange={(e) => setProductCode(e.target.value)}
            info="You can type multiple codes that separated with comma"
          />
          <Link to={`/${productCode}`}>
            <Button primary onClick={handleProducts}>
              Get Product Detail
            </Button>
          </Link>
        </div>
        {getContext()}
      </section>
      <Modal modal={modal} setModal={setModal} />
    </div>
  );
};

export default Container;
