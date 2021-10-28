import React from "react";
import ReactDOM from "react-dom";
import "@bedrock-layout/css-reset/lib/reset.css";
import "./styles.css";

import { AppBoundary } from "@bedrock-layout/appboundary";

import App from "./settingsPage/App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <AppBoundary>
      <App />
    </AppBoundary>
  </React.StrictMode>,
  rootElement
);
