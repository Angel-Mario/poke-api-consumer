import { create } from "zustand";
import { PokemonListItemData } from "../components/pokedex/types";

interface PokemonListItemState {
  pokemons: PokemonListItemData[];
  pokemonsFiltered: PokemonListItemData[];
  filter: string;
  version: string;
  setList: (by: PokemonListItemData[]) => void;
  setPokemonsFiltered: (by: PokemonListItemData[]) => void;
  setFilter: (by: string) => void;
  setVersion: (by: string) => void;
}

export const usePokemonListItemStore = create<PokemonListItemState>()(
  (set) => ({
    pokemons: [],
    pokemonsFiltered: [],
    filter: "",
    version: "0",
    setList: (by: PokemonListItemData[]) =>
      set((_prevState) => ({ pokemons: by })),
    setPokemonsFiltered: (by: PokemonListItemData[]) =>
      set((_prevState) => ({ pokemonsFiltered: by })),
    setFilter: (by: string) => set((_prevState) => ({ filter: by })),
    setVersion: (by: string) => set((_prevState) => ({ version: by })),
  }),
);
