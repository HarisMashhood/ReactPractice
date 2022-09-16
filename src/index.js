import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import App2 from "./App2";
import App3 from "./App3";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App3 />
  </StrictMode>
);
