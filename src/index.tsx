import React from "react";
import ReactDOM from "react-dom";
import { Center } from "@bedrock-layout/center";
import { PadBox } from "@bedrock-layout/padbox";
import "@bedrock-layout/css-reset/lib/reset.css";
import ContactList from "./Grid";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <PadBox
      as={Center}
      padding="lg"
      maxWidth="85rem"
      style={{ fontFamily: "sans-serif" }}
    >
      <ContactList />
    </PadBox>
  </React.StrictMode>,
  rootElement
);
