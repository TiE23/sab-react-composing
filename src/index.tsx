import React from "react";
import ReactDOM from "react-dom";
import { Center } from "@bedrock-layout/center";
import { PadBox } from "@bedrock-layout/padbox";
import styled from "styled-components";

import "@bedrock-layout/css-reset/lib/reset.css";
import { FormSideBar } from "./Split";

const BaseStyles = styled(Center).attrs(() => ({ as: PadBox }))<
  {padding: String, maxWidth: String}
>`
  input {
    border: 1px solid black;
    background: white;
  }

  button {
    color: white;
    background: black;
    border: none;
  }
`;

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <BaseStyles padding="mdLg" maxWidth="85rem">
      <FormSideBar />
    </BaseStyles>
  </React.StrictMode>,
  rootElement
);
