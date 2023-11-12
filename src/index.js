import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Global } from '@emotion/react';

import App from "./components/App";
import { Provider } from "react-redux";
import { store } from "../src/components/redux/store";
import {GlobalStyles} from '../src/styles/GlobalStyles'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Global styles={GlobalStyles} />
    <Provider store={store}>
      <BrowserRouter basename="/carrent">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
