import React, { StrictMode } from "https://esm.sh/react@18.3.1";
import { createRoot } from "https://esm.sh/react-dom@18.3.1/client";

const root = createRoot(document.getElementById("root")!);
root.render(
  <StrictMode>
    <h1>Hello world!</h1>
    <div>I am working!</div>
  </StrictMode>
);
