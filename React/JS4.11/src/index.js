import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import AppSecond from "./App1";
import AppThird from "./App2";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <>
      <App />
      <AppSecond />
      <AppThird />
    </>
  </StrictMode>
);
