import React from "react";
import * as ReactDOMClient from "react-dom/client";

import { HashRouter } from "react-router-dom";

// import { ReactDOM } from "react-dom";
import App from "./components/App";

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);
root.render(
    <HashRouter>
        <App />
    </HashRouter>
);
