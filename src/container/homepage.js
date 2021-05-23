import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Link, useParams } from "react-router-dom";

import { handleProducts } from "../helpers/tools";

import Button from "../components/Button";
import TextInput from "../components/TextInput";

const HomePage = ({ results, setResults }) => {
  const { code } = useParams();
  const [productCodes, setProductCodes] = useState(code || "");
  const [merchantCode, setMerchantCode] = useState("vineyardvines");

  return (
    <div className="text-inputs-wrapper">
      <TextInput
        placeholder="Merchant Code"
        value={merchantCode}
        onChange={(e) => setMerchantCode(e.target.value)}
      />
      <TextInput
        placeholder="Product Code"
        value={productCodes}
        onChange={(e) => setProductCodes(e.target.value)}
        info="You can type multiple codes that separated with comma"
      />
      <Link to={`/${productCodes}`}>
        <Button
          primary
          onClick={() => handleProducts(merchantCode, productCodes, setResults)}
          isLoading={results.isLoading}
        >
          Get Product Detail
        </Button>
      </Link>
    </div>
  );
};

HomePage.propTypes = {
  results: PropTypes.object,
  setResults: PropTypes.func,
}

export default HomePage;
