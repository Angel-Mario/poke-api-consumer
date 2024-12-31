import "./index.css";
import { createRoot } from "react-dom/client";

// Router Pages
import { RouterProvider } from "react-router-dom";

//Zustand

import { ROUTER } from "./routes/router";

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={ROUTER} />,
);
