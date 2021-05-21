import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

import LOGO from "../images/smartgiftlogo.svg";

import Button from "../components/Button";
import NoContentCard from "../components/NoContentCard";
import TextInput from "../components/TextInput";

import Content from "./content";
import { getProducts } from "./api";
import { FAIL, SUCCESS } from "./constants";

import "./style.scss";

const App = () => {
  const { code } = useParams();
  const [productCode, setProductCode] = useState(code || "");
  const [merchantCode, setMerchantCode] = useState("vineyardvines");
  const [results, setResults] = useState({});

  const handleProducts = () => {
    const query = `?merchantCode=${merchantCode}&codes[]=${productCode}`;
    getProducts(query, setResults);
  };

  const getContext = () => {
    if (results.status === SUCCESS) {
      if (results.data.length) {
        return results.data.map((product, key) => (
          <Content key={key.toString()} {...product} />
        ));
      } else {
        return <NoContentCard message="There is no product to show" />;
      }
    } else if (results.status === FAIL) {
      return <NoContentCard message={results.data} />;
    }
    return null;
  };

  return (
    <div className="app-container">
      <header>
        <img src={LOGO} alt="smartgift" id="smartgift-logo" />
      </header>
      <section id="main-content">
        <div className="section-row text-inputs-wrapper">
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
            <Button secondary onClick={handleProducts}>
              Get Product Detail
            </Button>
          </Link>
        </div>
        {getContext()}
      </section>
    </div>
  );
};

export default App;
