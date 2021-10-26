import React from "react";
import ReactDOM from "react-dom";
import { Center } from "@bedrock-layout/center";
import { PadBox } from "@bedrock-layout/padbox";
import "@bedrock-layout/css-reset/lib/reset.css";
import styled from "styled-components";
import PricingPlans from "./PricingPlans";

const AppStyles = styled(PadBox).attrs(() => ({
  as: Center,
  padding: "md",
  maxWidth: "85rem"
}))`
  font-family: sans-serif;
`;

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <AppStyles>
      <PricingPlans />
    </AppStyles>
  </React.StrictMode>,
  rootElement
);
