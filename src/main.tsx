import "./index.css";
import { createRoot } from "react-dom/client";

// Router Pages
import Root from "./routes/root";
import ErrorPage from "./error-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PokemonDetails from "./components/pokedex/PokemonDetails";

//Tailwind
import { PrimeReactProvider } from "primereact/api";
import Tailwind from "primereact/passthrough/tailwind";
import { twMerge } from "tailwind-merge";
import classNames from "classnames";

//Zustand

const TailwindDesign = Tailwind;
(TailwindDesign.inputtext = {
  root: () => ({
    className: classNames(
      "m-0",
      "font-sans text-gray-600 border border-gray-300 transition-colors duration-200 appearance-none rounded-lg",
      "p-3 text-base",
    ),
  }),
}),
  (TailwindDesign.panel = {
    header: () => ({
      className: classNames(
        "flex items-center justify-between", // flex and alignments
        "border border-gray-300 bg-gray-100 text-gray-700 rounded-tl-lg rounded-tr-lg", // borders and colors
        "py-3 px-5", // condition
      ),
    }),
    toggler: {
      className: classNames(
        "inline-flex items-center justify-center overflow-hidden relative no-underline", // alignments
        "w-8 h-8 text-gray-600 border-0 bg-transparent rounded-full transition duration-200 ease-in-out", // widths, borders, and transitions
        "hover:text-gray-900 hover:border-transparent hover:bg-gray-200", // hover
        "focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]", // focus
      ),
    },
    content: {
      className: classNames(
        "p-5 border border-gray-300 bg-white text-gray-700 border-t-0 last:rounded-br-lg last:rounded-bl-lg",
      ),
    },
  });

const value = {
  ripple: true,
  unstyled: true,
  pt: Tailwind,
  ptOptions: {
    mergeSections: true,
    mergeProps: true,
    classNameMergeFunction: twMerge,
  },
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
  // {
  //   future: {
  //     v7_fetcherPersist: true,
  //     v7_normalizeFormMethod: true,
  //     v7_partialHydration: true,
  //     v7_skipActionErrorRevalidation: true,
  //     v7_relativeSplatPath: true,
  //   },
  // },
);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
