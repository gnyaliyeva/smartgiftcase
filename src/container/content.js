import React, { useState, useEffect } from "react";
import _ from "lodash";

import Button from "../components/Button";
import SelectInput from "../components/SelectInput";
import Modal from "../components/Modal";

const Content = (product) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [modal, setModal] = useState({});
  const [selectedSKU, setSelectedSKU] = useState({
    image: product.images[0].url,
  });

  const handleAccept = () => {
    setModal({
      isOpen: true,
      message: (
        <div>
          The product code is <span>{selectedSKU.code}</span>
          <Button primary href={selectedSKU.url} target="__blank">Show it now</Button>
        </div>
      ),
      iconName: "basket",
    });
  };

  useEffect(() => {
    document.getElementById("product-desc").innerHTML = product.desc;
  }, [product.desc]);

  useEffect(() => {
    //to reset states when product is changed
    setSelectedColor(null);
    setSelectedSize(null);
    setIsButtonDisabled(true);
    setSelectedSKU({ image: product.images[0].url });
  }, [product]);

  useEffect(() => {
    if (selectedColor && selectedSize) {
      const finded = _.find(
        product.skus,
        (sku) =>
          sku.attrs.Color === selectedColor.value &&
          sku.attrs.Size === selectedSize.value
      );

      setSelectedSKU({
        image: finded.images[0],
        code: finded.sku,
        url: finded.url,
      });
      setIsButtonDisabled(!finded.orderable);

      if (!finded.orderable) {
        setModal({
          isOpen: true,
          message: "Selection is not available!",
          iconName: "sadFace",
        });
      }
    }
  }, [selectedSize, selectedColor, product.skus]);

  return (
    <div className="section-row">
      <div className="section-col">
        <div className="product-image-wrapper">
          <img src={selectedSKU.image} alt={product.name} />
        </div>
        <div className="description-wrapper">
          <div className="description-wrapper--title">Product Details</div>
          <p id="product-desc" className="description-wrapper--text"></p>
        </div>
      </div>
      <div className="section-col">
        <div className="product--title">{product.name}</div>
        <SelectInput
          placeholder="Choose Product Size"
          options={(product.attrList.Size || []).map((size) => ({
            label: size,
            value: size,
          }))}
          value={selectedSize}
          onChange={setSelectedSize}
        />
        <SelectInput
          placeholder="Choose Product Color"
          options={(product.attrList.Color || []).map((color) => ({
            label: color,
            value: color,
          }))}
          value={selectedColor}
          onChange={setSelectedColor}
        />
        <Button primary onClick={handleAccept} disabled={isButtonDisabled}>
          Accept
        </Button>
      </div>
      <Modal modal={modal} setModal={setModal} />
    </div>
  );
};

export default Content;
