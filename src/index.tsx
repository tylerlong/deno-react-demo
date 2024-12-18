import React, { StrictMode } from "https://esm.sh/react@18.2.0";
import { createRoot } from "https://esm.sh/react-dom@18.2.0/client";

const root = createRoot(document.getElementById("root")!);
root.render(
  <StrictMode>
    <h1>Hello world!</h1>
    <div>I am working!</div>
  </StrictMode>
);
