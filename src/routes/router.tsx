import { PrimeReactProvider } from "primereact/api";
import { createBrowserRouter, Navigate } from "react-router-dom";
import ErrorPage from "../error-page";
import Root from "./root";
import { TAILWINDVALUE } from "../utils/tailwindValue";

// loaders
import Pokemon, { loader as pokedexLoader } from "../routes/pokemon";
import { loader as pokedexItemDetailsLoader } from "../components/pokedex/PokemonList";

export const ROUTER = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrimeReactProvider value={TAILWINDVALUE}>
        <Root />
        <Navigate replace to="pokemon/" />
      </PrimeReactProvider>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "pokemon/",
        element: <Pokemon />,
        loader: pokedexLoader,
        children: [
          {
            path: ":id",
            loader: pokedexItemDetailsLoader,
            lazy: async () => {
              let { PokemonDetails } = await import(
                "../components/pokedex/pokemonDetails/PokemonDetails.tsx"
              );
              return { Component: PokemonDetails };
            },
          },
        ],
      },
      {
        path: "moves/",
        element: <Pokemon />,
      },
      {
        path: "abilities/",
        element: <Pokemon />,
      },
    ],
  },
  {
    path: "/poke-api-consumer/",
    element: (
      <PrimeReactProvider value={TAILWINDVALUE}>
        <Root />
        <Navigate replace to="pokemon/" />
      </PrimeReactProvider>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "pokemon/",
        element: <Pokemon />,
        loader: pokedexLoader,
        children: [
          {
            path: ":id",
            loader: pokedexItemDetailsLoader,
            lazy: async () => {
              let { PokemonDetails } = await import(
                "../components/pokedex/pokemonDetails/PokemonDetails.tsx"
              );
              return { Component: PokemonDetails };
            },
          },
        ],
      },
      {
        path: "moves/",
        element: <Pokemon />,
      },
      {
        path: "abilities/",
        element: <Pokemon />,
      },
    ],
  },
]);
