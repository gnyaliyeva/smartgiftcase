import { getProducts } from "../helpers/api";
import { FAIL, SUCCESS } from "../helpers/constants";

import Content from "../container/content";

import Button from "../components/Button";
import NoContentCard from "../components/NoContentCard";

export const handleProducts = (merchantCode, productCode, setResults) => {
  // to allow multiple product code search
  let codes = "";
  productCode.split(",").map((item) => (codes += `&codes[]=${item}`));
  const query = `?merchantCode=${merchantCode}${codes}`;
  getProducts(query, setResults);
};

export const getContext = (results) => {
  // to creating home page product context
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

export const handleAccept = (selectedSKU, setModal) => {
  // tp handling accept button action
  setModal({
    isOpen: true,
    message: (
      <div>
        The product code is <span>{selectedSKU.code}</span>
        <Button primary href={selectedSKU.url} target="__blank">
          Show it now
        </Button>
      </div>
    ),
    iconName: "basket",
  });
};

const root = document.querySelector(":root");

export const themeSetter = () => {
  // to initial theme settings
  const themeName = window.localStorage.getItem("theme") || "--light";
  const colorName = window.localStorage.getItem("color") || `var(${themeName}-color)`;
  const sizeName = window.localStorage.getItem("size") || "--size3";

  window.localStorage.setItem("theme", themeName);
  window.localStorage.setItem("color", colorName);
  window.localStorage.setItem("size", sizeName);

  root.style.setProperty("--background", `var(${themeName}-bg)`);
  root.style.setProperty("--color", `var(${colorName})`);
  root.style.setProperty("--logo", `var(${themeName}-logo)`);
  root.style.setProperty("--primary", `var(${colorName})`);
  root.style.setProperty("--font-xsmall", `var(${sizeName}-xsmall)`);
  root.style.setProperty("--font-small", `var(${sizeName}-small)`);
  root.style.setProperty("--font-medium", `var(${sizeName}-medium)`);
  root.style.setProperty("--font-large", `var(${sizeName}-large)`);
  root.style.setProperty("--font-xlarge", `var(${sizeName}-xlarge)`);
};

export const handleTheme = (e) => {
  // to handling theme changing
  root.style.setProperty("--color", `var(--${e.target.id}-color)`);
  root.style.setProperty("--background", `var(--${e.target.id}-bg)`);
  root.style.setProperty("--logo", `var(--${e.target.id}-logo)`);
  window.localStorage.setItem("theme", `--${e.target.id}`);
  window.localStorage.setItem("color", `--${e.target.id}-color`);
};

export const handleColor = (e) => {
  // to handling color changing
  root.style.setProperty("--color", `var(--${e.target.id})`);
  root.style.setProperty("--primary", `var(--${e.target.id})`);
  window.localStorage.setItem("color", `--${e.target.id}`);
};

export const handleFontSize = (e) => {
  // to handling font size changing
  root.style.setProperty('--font-xsmall', `var(--${e.target.id}-xsmall)`);
  root.style.setProperty('--font-small', `var(--${e.target.id}-small)`);
  root.style.setProperty('--font-medium', `var(--${e.target.id}-medium)`);
  root.style.setProperty('--font-large', `var(--${e.target.id}-large)`);
  root.style.setProperty('--font-xlarge', `var(--${e.target.id}-xlarge)`);
  window.localStorage.setItem("size", `--${e.target.id}`);
};