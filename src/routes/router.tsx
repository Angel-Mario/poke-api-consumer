import { PrimeReactProvider } from "primereact/api";
import { createBrowserRouter, Navigate } from "react-router-dom";
import ErrorPage from "../error-page";
import Root from "./root";
import { TAILWINDVALUE } from "../utils/tailwindValue";

// loaders
import Pokemon from "../routes/pokemon";
import { loader as pokedexItemDetailsLoader } from "../routes/loaders/pokemonDetailsLoader";
import { loader as movesLoader } from "../routes/loaders/movesLoader";
import { loader as pokemonLoader } from "../routes/loaders/pokemonLoader";

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
        loader: pokemonLoader,
        children: [
          {
            path: ":id",
            loader: pokedexItemDetailsLoader,
            lazy: async () => {
              let { PokemonDetails } = await import(
                "../components/pokemons/pokemonDetails/PokemonDetails.tsx"
              );
              return { Component: PokemonDetails };
            },
          },
        ],
      },
      {
        path: "moves/",
        loader: movesLoader,
        lazy: async () => {
          let { default: Moves } = await import("./moves.tsx");
          return { Component: Moves };
        },
      },
      {
        path: "abilities/",
        element: <h1 className="text-center">WORK IN PROGRES :v</h1>,
      },
      {
        path: "items/",
        element: <h1 className="text-center">WORK IN PROGRES :v</h1>,
      },
      {
        path: "locations/",
        element: <h1 className="text-center">WORK IN PROGRES :v</h1>,
      },
      {
        path: "types/",
        element: <h1 className="text-center">WORK IN PROGRES :v</h1>,
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
        loader: pokemonLoader,
        children: [
          {
            path: ":id",
            loader: pokedexItemDetailsLoader,
            lazy: async () => {
              let { PokemonDetails } = await import(
                "../components/pokemons/pokemonDetails/PokemonDetails.tsx"
              );
              return { Component: PokemonDetails };
            },
          },
        ],
      },
      {
        path: "moves/",
        loader: movesLoader,
        lazy: async () => {
          let { default: Moves } = await import("./moves.tsx");
          return { Component: Moves };
        },
      },
      {
        path: "abilities/",
        element: <h1 className="text-center">WORK IN PROGRES :v</h1>,
      },
      {
        path: "items/",
        element: <h1 className="text-center">WORK IN PROGRES :v</h1>,
      },
      {
        path: "locations/",
        element: <h1 className="text-center">WORK IN PROGRES :v</h1>,
      },
      {
        path: "types/",
        element: <h1 className="text-center">WORK IN PROGRES :v</h1>,
      },
    ],
  },
]);
