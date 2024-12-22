import "./index.css";
// import "primereact/resources/themes/vela-blue/theme.css";
import { createRoot } from "react-dom/client";
import { PrimeReactProvider } from "primereact/api";

// Router Pages
import Root from "./routes/root";
import ErrorPage from "./error-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PokemonDetails from "./components/pokedex/PokemonDetails";

const value = {
  ripple: true,
};

// loaders
import Pokemon, { loader as pokedexLoader } from "./routes/pokemon";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <PrimeReactProvider value={value}>
          <Root />
        </PrimeReactProvider>
      ),
      errorElement: <ErrorPage />,
      children: [
        {
          path: "pokemon/",
          element: <Pokemon />,
          children: [
            {
              path: ":id",
              element: <PokemonDetails />,
              loader: pokedexLoader,
            },
          ],
        },
      ],
    },
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
      v7_relativeSplatPath: true,
    },
  },
);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
